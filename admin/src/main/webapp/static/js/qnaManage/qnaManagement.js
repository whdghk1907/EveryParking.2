var sessionInfo = null;	

let qnaManagement = {
	    gridOption:{},
	    grid : null,
	    initPage: function(){
	        let $this = this;
	        this.gridOption = {
	            cols : [
	                {title : "번호", name: "QNA_SEQ", type:"number", colWidth:"10", order: true},
	                {title : "문의 제목", name: "QNA_TITLE", filter:function(data, rowData, ridx, cidx, $this) {
	                	return `<p onclick="onTitleClick(` + rowData.QNA_SEQ + `)">`+ escapeHtml(rowData.QNA_TITLE); +`</p>`}},
	                {title : "등록일", name: "REG_DATE", type:"date"},
	                {title : "문의 유형", name: "SUB_NAME", colWidth:"20"},
	                {title : "답변여부", name: "QNA_ANS", filter:function(data, rowData, ridx, cidx, $this) {
	                	if (rowData.QNA_ANS == 'Y') {
		                	return `<a class="btn btn-danger btn-sm" onclick="qnaManagement.updateQna(${ridx})">답변완료</a>`
						}
	                	return `<a class="btn btn-outline-primary btn-sm" onclick="qnaManagement.updateQna(${ridx})">답변하기</a>`
	                }, colWidth:"10"},
	            ],
	            pagingEl : '#pagingBlock4',
	            getParam : getParam
	        };
	        this.grid = new Grid("#qnaManageTable", $this.gridOption,"/qnaManage/selectListQna");
	    },
	    updateQna : function(ridx){
	    	let $this = this;
	    	let rowData = $this.grid.getRowData(ridx)
	    	var qnaUpdateModal = '';
	    		
	    		ajaxCall("/qnaManage/getQna?QNA_SEQ=" + rowData.QNA_SEQ , null, function(data){	    
	    		
	    		console.log("게시판");
	    		console.log(data);
	    		
				var dateFormater = data.data.REG_DATE;
				var dateForm = moment(dateFormater).format('YY-MM-DD HH:mm');
	    		
	    		if(data.data.QNA_CONT == undefined){
	    			data.data.QNA_CONT = '';
	    		}
	    		
		    	qnaUpdateModal = ``;
		    	
		    	$("#modalZone").empty();
		    	$("#modalZone").append(qnaUpdateModal);
		    	
		    	getCommentList(data.data.QNA_SEQ);		    	
		    	getQnaUpdateModal();
	    	
	    })
	}}	    

function getCommentList(nnn){
	
	$("#cmtBtn").click(function(){
		$("#cmtMore").css("display","");
		$("#cmtMoreDiv").css("display","");
		$("#cmtBtn").css("display","none");
		$("#cmtListDiv").css("display","none");
	})
	
	$("#cmtBtnMore").click(function(){
		$("#cmtMore").css("display","none");
		$("#cmtMoreDiv").css("display","none");
		$("#cmtBtn").css("display","");
		$("#cmtListDiv").css("display","");

	})

	let ttt = new URL(window.location.href);
	const urlParams = ttt.searchParams;
	let qnaSeq = urlParams.get("QNA_SEQ");
	var qnaNum;
	
	if (qnaSeq == null){
		qnaNum = nnn;
	} else {
		qnaNum = qnaSeq;
	}

	var cmt = "";
	var cmtList = "";
	var cmtUpdate = "";
	var cmtUpdateModal = "";
	var reply = "";
	var replyWidth = "";
	var replyIcon = "";
	var replyModal = "";
	var modalZone = "";
	
	ajaxCall("/qnaManage/getCommentList?QNA_SEQ=" + qnaNum, null,function(data){
				
		// 댓글이 4개 이상일 때와 이하일 때를 구분해 놓았습니다.
		if(data.length <= 4){
			
			$("#cmtBtn").css("display","none");
						
		for (var i = 0; i < data.length; i++) {	
			// 시간 출력 설정
			var dateFormat = data[i].REG_DATE;
			var date = moment(dateFormat).format('YY-MM-DD HH:mm');
			
			// 수정,삭제 작성 부분
			if (sessionInfo != undefined && sessionInfo.userName == data[i].USER_NAME) {
				
				cmtUpdate = `
		                        <a class="commentBtn" onclick ="updateModal(`+ data[i].QNAC_SEQ +`)"> 수정 </a>
		                        <a class="commentBtn" onclick ="deleteComment(`+ data[i].QNAC_SEQ +`)"> 삭제 </a>
                        	`;
				cmtUpdateModal = `<div class="popWrap02" id = "updateModal`+ data[i].QNAC_SEQ +`">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form id="commentDetail`+ data[i].QNAC_SEQ +`">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>댓글 수정</h3>
										</div>
										<div class="modalInfo">
									        <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="updateCont`+data[i].QNAC_SEQ+`" rows="10">`+ data[i].QNAC_CONT +`</textarea>
									    </div>
									    <div class="popBtn">
									        <button type="button" class="delBtn" onclick="updateComment(`+ data[i].QNAC_SEQ +`)">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>
								`;
				
			} else{
				cmtUpdate = "";
				cmtUpdateModal = "";
			}
			//대댓글 작성 링크
			if (sessionInfo != undefined) {
				replyIcon = `<a class = "commentBtn" onclick="replyModal(`+ data[i].QNAC_SEQ +`)">답글<a>`;
				replyModal = `  <div class="popWrap02" id = "replyModal`+ data[i].QNAC_SEQ +`">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form action="/qnaManage/insertReply" method="post" onsubmit="insertReply(`+ data[i].QNAC_SEQ +`)">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>답글 달기</h3>
										</div>
										<div class="modalInfo">
											<input type="hidden" name="QNA_SEQ" value="`+ data[i].QNA_SEQ +`">
							                <input type="hidden" name="GQNA_NUM" value="`+ data[i].QNAC_SEQ +`">
							                <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="replyCont`+data[i].QNAC_SEQ+`" rows="10"></textarea>
									    </div>
									    <div class="popBtn">
									        <button type="submit" class="delBtn">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>`;
			} else {
				replyIcon = "";
				replyModal = "";
			}
			
			// 대댓글 위치 잡기
			if (data[i].GQNA_DEP == 1) {
				cmtUpdate = "";
				
				replyWidth = `<a class="replyWidth"></a>`;
				
				cmtUpdate = `<a class="commentBtn" onclick ="updateModal(`+ data[i].QNAC_SEQ +`)">수정</a><a class="commentBtn" onclick ="deleteReply(`+ data[i].QNAC_SEQ +`)">삭제</a>`;
				
				replyIcon = "";
				replyModal = "";

			} else {
				replyWidth = "";
			}
			

			// 댓글 메인 출력 부분
			cmt +=  `
			  <div>
			  `+ replyWidth +`
                <img src="../img/user.svg">
                <p>`+data[i].USER_NAME+`</p>
                <span>`+ date +`</span>
                `+cmtUpdate+`
                `+replyIcon+`
              </div>
              <div>
              `+ replyWidth +`
              <p>`+data[i].QNAC_CONT+`</p>
              </div>
              <hr>
			`;
			modalZone += cmtUpdateModal;
			modalZone += replyModal;		
		}

	} 
	// 4개 이상일 때
	else {
		for (var i = 0; i < 4; i++) {	
			// 시간 출력 설정
			var dateFormat = data[i].REG_DATE;
			var date = moment(dateFormat).format('YY-MM-DD HH:mm');
			
			// 수정,삭제 작성 부분
			if (sessionInfo != undefined && sessionInfo.userName == data[i].USER_NAME) {
				
				cmtUpdate = `
		                        <a class="commentBtn" onclick ="updateModal(`+ data[i].QNAC_SEQ +`)"> 수정 </a>
		                        <a class="commentBtn" onclick ="deleteComment(`+ data[i].QNAC_SEQ +`)"> 삭제 </a>
                        	`;
				cmtUpdateModal = `<div class="popWrap02" id = "updateModal`+ data[i].QNAC_SEQ +`">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form id="commentDetail`+ data[i].QNAC_SEQ +`">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>댓글 수정</h3>
										</div>
										<div class="modalInfo">
									        <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="updateCont`+data[i].QNAC_SEQ+`" rows="10">`+ data[i].QNAC_CONT +`</textarea>
									    </div>
									    <div class="popBtn">
									        <button type="button" class="delBtn" onclick="updateComment(`+ data[i].QNAC_SEQ +`)">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>
								`;
				
			} else{
				cmtUpdate = "";
				cmtUpdateModal = "";
			}
			//대댓글 작성 링크
			if (sessionInfo != undefined) {
				replyIcon = `<a class = "commentBtn" onclick="replyModal(`+ data[i].QNAC_SEQ +`)">답글<a>`;
				replyModal = `  <div class="popWrap02" id = "replyModal`+ data[i].QNAC_SEQ +`">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form action="/qnaManage/insertReply" method="post" onsubmit="insertReply(`+ data[i].QNAC_SEQ +`)">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>답글 달기</h3>
										</div>
										<div class="modalInfo">
											<input type="hidden" name="QNA_SEQ" value="`+ data[i].QNA_SEQ +`">
							                <input type="hidden" name="GQNA_NUM" value="`+ data[i].QNAC_SEQ +`">
							                <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="replyCont`+data[i].QNAC_SEQ+`" rows="10"></textarea>
									    </div>
									    <div class="popBtn">
									        <button type="submit" class="delBtn">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>`;
			} else {
				replyIcon = "";
				replyModal = "";
			}
			
			// 대댓글 위치 잡기
			if (data[i].GQNA_DEP == 1) {
				cmtUpdate = "";
				
				replyWidth = `<a class="replyWidth"></a>`;
				
				cmtUpdate = `<a class="commentBtn" onclick ="updateModal(`+ data[i].QNAC_SEQ +`)">수정</a><a class="commentBtn" onclick ="deleteReply(`+ data[i].QNAC_SEQ +`)">삭제</a>`;
				
				replyIcon = "";
				replyModal = "";

			} else {
				replyWidth = "";
			}
			

			// 댓글 메인 출력 부분
			cmt +=  `
			  <div>
			  `+ replyWidth +`
                <img src="../img/user.svg">
                <p>`+data[i].USER_NAME+`</p>
                <span>`+ date +`</span>
                `+cmtUpdate+`
                `+replyIcon+`
              </div>
              <div>
              `+ replyWidth +`
              <p>`+data[i].QNAC_CONT+`</p>
              </div>
              <hr>
			`;
			modalZone += cmtUpdateModal;
			modalZone += replyModal;		
		}

		// 4개 이상인 경우 더보기 누르면 출력됩니다.
		for(var i = 4; i < data.length; i++){	
			// 시간 출력 설정
			var dateFormat = data[i].REG_DATE;
			var date = moment(dateFormat).format('YY-MM-DD HH:mm');
			
			// 수정,삭제 작성 부분
			if (sessionInfo != undefined && sessionInfo.userName == data[i].USER_NAME) {
				
				cmtUpdate = `
		                        <a class="commentBtn" onclick ="updateModal(`+ data[i].QNAC_SEQ +`)"> 수정 </a>
		                        <a class="commentBtn" onclick ="deleteComment(`+ data[i].QNAC_SEQ +`)"> 삭제 </a>
                        	`;
				cmtUpdateModal = `<div class="popWrap02" id = "updateModal`+ data[i].QNAC_SEQ +`">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form id="commentDetail`+ data[i].QNAC_SEQ +`">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>댓글 수정</h3>
										</div>
										<div class="modalInfo">
									        <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="updateCont`+data[i].QNAC_SEQ+`" rows="10">`+ data[i].QNAC_CONT +`</textarea>
									    </div>
									    <div class="popBtn">
									        <button type="button" class="delBtn" onclick="updateComment(`+ data[i].QNAC_SEQ +`)">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>
								`;
				
			} else{
				cmtUpdate = "";
				cmtUpdateModal = "";
			}
			//대댓글 작성 링크
			if (sessionInfo != undefined) {
				replyIcon = `<a class = "commentBtn" onclick="replyModal(`+ data[i].QNAC_SEQ +`)">답글<a>`;
				replyModal = `  <div class="popWrap02" id = "replyModal`+ data[i].QNAC_SEQ +`">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form action="/qnaManage/insertReply" method="post" onsubmit="insertReply(`+ data[i].QNAC_SEQ +`)">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>답글 달기</h3>
										</div>
										<div class="modalInfo">
											<input type="hidden" name="QNA_SEQ" value="`+ data[i].QNA_SEQ +`">
							                <input type="hidden" name="GQNA_NUM" value="`+ data[i].QNAC_SEQ +`">
							                <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="replyCont`+data[i].QNAC_SEQ+`" rows="10"></textarea>
									    </div>
									    <div class="popBtn">
									        <button type="submit" class="delBtn">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>`;
			} else {
				replyIcon = "";
				replyModal = "";
			}
			
			// 대댓글 위치 잡기
			if (data[i].GQNA_DEP == 1) {
				cmtUpdate = "";
				
				replyWidth = `<a class="replyWidth"></a>`;
				
				cmtUpdate = `<a class="commentBtn" onclick ="updateModal(`+ data[i].QNAC_SEQ +`)">수정</a><a class="commentBtn" onclick ="deleteReply(`+ data[i].QNAC_SEQ +`)">삭제</a>`;
				
				replyIcon = "";
				replyModal = "";

			} else {
				replyWidth = "";
			}
			

			// 댓글 메인 출력 부분
			cmtList +=  `
			  <div>
			  `+ replyWidth +`
                <img src="../img/user.svg">
                <p>`+data[i].USER_NAME+`</p>
                <span>`+ date +`</span>
                `+cmtUpdate+`
                `+replyIcon+`
              </div>
              <div>
              `+ replyWidth +`
              <p>`+data[i].QNAC_CONT+`</p>
              </div>
              <hr>
			`;
			modalZone += cmtUpdateModal;
			modalZone += replyModal;
			
		}
	}
		$("#cmtList").empty();
		$("#cmtList").append(cmt);	
		
		$("#cmtMore").empty();
		$("#cmtMore").append(cmtList);
		
		$("#modalZone").empty();
		$("#modalZone").append(modalZone);
		
	})
}	

	// 업데이트 모달
	function updateModal(commentNum){
		
		var alertModal = "";
		
		console.log(commentNum);
		
	    alertModal = null;

    	if(alertModal) {
            alertModal.remove();
        }
		
        alertModal = $('#updateModal' + commentNum)
        document.querySelector('#updateModal' + commentNum).style.display = "flex";
		
        alertModal.find("#O").off().click(function(){
            document.querySelector('#updateModal' + commentNum).style.display = "none";
        });
		
	}
	// 답글 모달
	function replyModal(commentNum){
		
		var alertModal = "";
				
		console.log(commentNum);
		
	    alertModal = null;

    	if(alertModal) {
            alertModal.remove();
        }
		
        alertModal = $('#replyModal' + commentNum)
        document.querySelector('#replyModal' + commentNum).style.display = "flex";
		
        alertModal.find("#O").off().click(function(){
            document.querySelector('#replyModal' + commentNum).style.display = "none";
        });
	}
	// 본문 수정 모달
	function getQnaUpdateModal(){
		$("#qnaUpdateModal").modal('show');
	}	
	function onTitleClick(qnaNum){
		location.href = "/qnaManage/readQnaPage?QNA_SEQ="+ qnaNum;
    }
	
	
	function getParam(){
	    return {}
	}
		
	$(function(){
	    qnaManagement.initPage();
		getSessionInfo();
		getCommentList();
	    ajaxCall(
	    )
	})
	
	function insertComment(){
		
		let comment = document.getElementById("qnacCont").value;
		
		if ( comment == null || comment == "" ) {
			cmm.alert("내용을 입력해 주세요");
			event.preventDefault();
			return false;
		}
	}
	
	function insertReply(replyNum){
		
		let reply = document.getElementById("replyCont" + replyNum).value;
		
		if ( reply == null || reply == "" ) {
			cmm.alert("내용을 입력해 주세요");
			event.preventDefault();
			return false;
		}
	}	
	
	function updateComment(commentNum){
		
		var param = cmm.formToJson("#commentDetail" + commentNum);
		console.log(param)
		
		let comment = document.getElementById("updateCont" + commentNum).value;
		
		if ( comment == null || comment == "" ) {
			cmm.alert("내용을 입력해 주세요");
			event.preventDefault();
			return false;
		}
		
		ajaxCall("/qnaManage/updateComment", param, function(data){
				cmm.alert(data.message, function(){
					if (data.code == 'S') {
						location.reload();
					}
				})
			})
		}
	
	function deleteComment(commentNum){
		
		cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
			ajaxCall("/qnaManage/deleteComment?QNAC_SEQ=" + commentNum, null, function(data){
				cmm.alert(data.message, function(){
					if (data.code == 'S') {
						location.reload();
					}
				})
			})
		}
	)};
	
	function deleteReply(commentNum){
		
		cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
			ajaxCall("/qnaManage/deleteReply?QNAC_SEQ=" + commentNum, null, function(data){
				cmm.alert(data.message, function(){
					if (data.code == 'S') {
						location.reload();
					}
				})
			})
		}
	)};

	
	function deleteQna(qnaNum){
		cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
			ajaxCall("/qnaManage/deleteQna?QNA_SEQ=" + qnaNum, null, function(data){
				cmm.alert(data.message, function(){
					if (data.code == 'S') {
						location.href="/qnaManage/qnaManage"
					}
				})
			})
		}
	)		
}		
///////////////////////////////////  세션 정보 가져오기  /////////////////////////////////////////////////////////////////////	
	
	function getSessionInfo(){
		
		var xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function(){
			if(xhr.readyState == 4 && xhr.status == 200){
				var data = JSON.parse(xhr.responseText);
				
				if(data.result != 'empty'){
					sessionInfo = {
						userNo : data.userNo,
						userName : data.userName
					};
				}
				
			}
		};
		xhr.open("get" , "/qnaManage/getSessionInfo" , false); //마지막 인자.. false 동기식인데.. 왠만하면 피하자..
		xhr.send();
	}
				