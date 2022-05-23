let parkingBlock = {
		gridOption:{},
		grid : null,

		initPage: function(){
			let $this = this;
			this.gridOption = {
					cols : [
						{title:"번호", name:"BSEQ", colWidth:"7", order:true}
						, {title:"주차장명", name:"PARKNAME", colWidth:"10"}
						, {title:"시작 시간", name:"BSTART", type:"date", colWidth:"10"}
						, {title:"종료 시간", name:"BEND", type:"date", colWidth:"10"}
						, {title:"차단 사유", name:"BCONT", colWidth:"15"}
						, {title:"차단 구역", name:"SNAME", colWidth:"10"}
						, 
						{title : "삭제", name: "BSEQ", colWidth:"5", filter:function(data, rowData, ridx, cidx, $this) {
							return `<a class="btn btn-outline-danger btn-sm" onclick="parkingBlock.deleteRow(${ridx})">해제</a>`
						}}
						],
						pagingEl : '#pagingBlock2',
						getParam : getParam
			};
			this.grid = new Grid("#parkingBlock", $this.gridOption, "/parkingBlock/selectListParkingBlock");
		},
		// 설정 변경 후 오류 수정
		deleteRow: function(ridx) {
			   let $this = this;
			   let rowData = this.grid.getRowData(ridx);
			   param = {'BLO_SEQ': rowData.BSEQ}
			   cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
			      ajaxCall('/parkingBlock/deleteParkingBlock', param, function(data) {
			         cmm.alert(data.message, function(){
			            if(data.code == 'S'){
			               grids[0].reSearch();
			            }
			         })
			      });
			   })
			}
	}

	function getParam(){
	    return {}
	}
	
	$(function(){
	    parkingBlock.initPage();
	    // alert, comfirm .. > cmm.alert()
	    // cmm.confirm
	
	
	    // cmm
	
	    // cmm.attachComma() >> 숫자 포맷 (콤마)
	    // cmm.formToJson()
	    // cmm.jsonToForm()
	    ajaxCall(
	
	    )
})



