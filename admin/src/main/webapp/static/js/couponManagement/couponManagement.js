let couponManagement = {
	    gridOption:{},
	    grid : null,
	    initPage: function(){
	        let $this = this;
	        this.gridOption = {
	            cols : [
	                {title : "이미지", name: "FILE_SEQ", colWidth:"20", filter:function(data, rowData, ridx, cidx, $this) {
                	 return `<img src="/uploadImage/${rowData.FILE_URL}/${rowData.FILE_CONV_NAME}" style="width:100%;"/>`}},
	                {title : "쿠폰명", name: "COU_NAME"},
	                {title : "할인가격", name: "COU_PRICE", type:"number", colWidth:"10"},
	                {title : "남은 발행수", name: "COU_COUNT", colWidth:"10"},
	                {title : "등록일", name: "REG_DATE", type:"date", colWidth:"20"},
	                {title : "삭제", name: "COU_SEQ", filter:function(data, rowData, ridx, cidx, $this) {
	                    return `<a class="btn btn-outline-danger btn-sm" onclick="couponManagement.deleteCoupon(${ridx})">삭제</a>`
	                }, colWidth:"10"}
	            ],
	            onRowClick: "onRowClick",
	            pagingEl : '#pagingBlock2',
	            getParam : getParam
	        };
	        this.grid = new Grid("#couponManagement", $this.gridOption,"/couponManagement/selectListCoupon");
	    },
	    deleteCoupon : function(ridx){
			let $this =this; 
			let rowData = $this.grid.getRowData(ridx)
			cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
				ajaxCall('/couponManagement/deleteCoupon', {COU_SEQ : rowData.COU_SEQ}, function(data){
					console.log(data)
					if(data.code == 'S'){
						cmm.alert('삭제되었습니다.', function(){
							$this.grid.reSearch();	
						});
					}
				})
			});
		}
	}
	function getParam(){
	    return {}
	}

	$(function(){
		couponManagement.initPage();
	    // alert, comfirm .. > cmm.alert()
	    // cmm.confirm


	    // cmm

	    // cmm.attachComma() >> 숫자 포맷 (콤마)
	    // cmm.formToJson()
	    // cmm.jsonToForm()
	    ajaxCall(

	    )
	})