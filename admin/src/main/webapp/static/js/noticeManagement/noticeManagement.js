/**
 * 03/14 종화 작성
 */


function uploadData() {
	
	let editorData = editor.getData();	
	$('input[name=editorData]').val(editorData);
	
	let notiTitle = document.getElementsByName("notiTitle")[0].value;
			
	if ( notiTitle==null || notiTitle=="" ) {
		cmm.alert("제목을 입력해 주세요");
		event.preventDefault();
		return false;
	}
	
	if ( editorData==null || editorData=="" ) {
		cmm.alert("본문을 입력해 주세요");
		event.preventDefault();
		return false;
	}

	
}


function updateData() {
	
	let editorData = editor.getData();
	
	let notiTitle = document.getElementsByName("notiTitle")[0].value;
	
	if ( notiTitle==null || notiTitle=="" ) {
		cmm.alert("제목을 입력해 주세요");
		return false;
	}
	
	if ( editorData==null || editorData=="" ) {
		cmm.alert("본문을 입력해 주세요");
		return false;
	}
	
	let param = cmm.formToJson("#noticeDetail");
	
	param.editorData = editorData;
	ajaxCall("/noticeManagement/updateNoti", param, function(data){
		cmm.alert(data.message, function(){
			if(data.code =='S'){
				location.href="/noticeManagement/noticeManagement"
			}
		})
	})
}
let noticeManagement = {
	    gridOption:{},
	    grid : null,
	    initPage: function(){
	        let $this = this;
	        this.gridOption = {
	            cols : [
	                {title : "번호", name: "NOTI_SEQ", type:"number", colWidth:"10", order: true},
	                {title : "공지사항 제목", name: "NOTI_TITLE", filter:function(data, rowData, ridx, cidx, $this) {
	                	return `<p onclick="onTitleClick(` + rowData.NOTI_SEQ + `)">`+ escapeHtml(rowData.NOTI_TITLE); +`</p>`}},
	                {title : "작성자", name: "USER_NAME", colWidth:"10"},
	                {title : "등록일", name: "REG_DATE", type:"date", colWidth:"20"},
	                {title : "수정", name: "modify", filter:function(data, rowData, ridx, cidx, $this){
	                    return `<a href = "/noticeManagement/noticeUpdateForm?NOTI_SEQ=`+ rowData.NOTI_SEQ +`">수정</a>`
	                }, colWidth:"10"},
	                {title : "삭제", name: "NOTI_SEQ", filter:function(data, rowData, ridx, cidx, $this) {
	                    return `<a onclick="noticeManagement.deleteNotice(${ridx})">삭제</a>`
	                }, colWidth:"10"}
	            ],
	            pagingEl : '#pagingBlock3',
	            getParam : getParam
	        };
	        this.grid = new Grid("#noticeManageTable", $this.gridOption,"/noticeManagement/selectListNoti");
	    },
	    deleteNotice : function(ridx){
			let $this =this; 
			let rowData = $this.grid.getRowData(ridx)
			cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
				ajaxCall('/noticeManagement/deleteNoti', {NOTI_SEQ : rowData.NOTI_SEQ}, function(data){
					console.log(data)
					if(data.code == 'S'){
						cmm.alert('삭제되었습니다.', function(){
							$this.grid.reSearch();	
						});
					}
				})
			});
		},
	    updateNotice : function(ridx){
	    	let $this = this;
	    	let rowData = $this.grid.getRowData(ridx)
	    	var noticeUpdateModal = '';
	    		
	    		ajaxCall("/noticeManagement/getNotice?NOTI_SEQ=" + rowData.NOTI_SEQ , null, function(data){	    
	    		
	    		if(data.data.NOTI_CONT == undefined){
	    			
	    			data.data.NOTI_CONT = '';
	    			
	    		}
	    			
		    	noticeUpdateModal = `
		    						<div class="modalStyle modal fade" id="noticeUpdateModal"
										data-bs-backdrop="show" data-bs-keyboard="false" tabindex="-1"
										aria-labelledby="staticBackdropLabel" aria-hidden="true">
										<div class="modal-dialog modal-lg">
											<div class="modal-content rounded shadow">
												<form id = "noticeDetail">
		    									<input type="hidden" name="NOTI_SEQ" value="`+ data.data.NOTI_SEQ +`">
													<div class="modal-header" style = "background-color: #313a46; color:#fff; height: 100%">
														<div class="row">
															<div class="col px-0">
																<a class="nav-link active fs-3">공지사항 수정</a>
																<a class="nav-link fs-6">공지사항을 수정해 주세요</a>
															</div>
														</div>
													</div>
													<div class="modal-body">
														<div class="row">
															<div class="col">
																<div class="row mt-3">
																	<div class="col-3 d-flex justify-content-between">
											                        	<span class="fw-bold ps-1">제목</span>
											                        	<span class="text-black-50">|</span>
																	</div>
																	<div class="col">
																		<input class="form-control" type="text" name="notiTitle" placeholder="제목을 입력해주세요." value = "`+ data.data.NOTI_TITLE +`">
																	</div>
																</div>
																<div class="row mt-5 mb-5">
																	<div class="col">
																		<textarea class="form-control" id="writeEditor">`+ data.data.NOTI_CONT +`</textarea>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div class="modal-footer" style="border: none;">
														<button type="button" class="modalBtn btn btn-secondary"
															style="background-color: #e0e0e0; color: #000;"
															data-bs-dismiss="modal">취소</button>
														<button type="button" class="modalBtn btn btn-primary" onclick="updateData()">등록</button>
													</div>
												</form>
											</div>
										</div>
									</div>
		    						`;
		    	
		    	$("#modalZone").empty();
		    	$("#modalZone").append(noticeUpdateModal);
		    	
		    	editorCheck();
		    	getNoticeUpdateModal();
	    	
	    })
	}}
	// 업데이트 모달
	function getNoticeUpdateModal(){
		$("#noticeUpdateModal").modal('show');
	}
	// 모달에서 CkEditor 작동하게끔
	function editorCheck(){
		const writeEditor = document.getElementById('writeEditor');
		
		if(writeEditor){

		    ClassicEditor
		        .create( document.querySelector( '#writeEditor' ) , {
		            placeholder: '여기서 본문을 작성해주세요',
		            ckfinder: {
		                uploadUrl: '/admin/editor/uploadView'
		            }
		        } )
		        .then( newEditor => {
		            editor = newEditor;
		        } )

		        .then( editor => {
		            window.editor = editor;

		        } )
		        .catch( error => {
		            console.error( 'Oops, something went wrong!' );
		            console.error( 'Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:' );
		            console.warn( 'Build id: g64ljk55ssvc-goqlohse75uw' );
		            console.error( error );
		        } );
		}
	}
		
	function getParam(){
	    return {}
	}

	$(function(){
	    noticeManagement.initPage();
	    ajaxCall(

	    )
	})
	function onTitleClick(noticeNum){
		location.href = "/noticeManagement/readNoticePage?NOTI_SEQ="+ noticeNum;
    }

