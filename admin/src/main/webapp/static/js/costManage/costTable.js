
let cost = {
		gridOption:{},
		grid : null,

		initPage: function(){
			let $this = this;
			this.gridOption = {
					cols : [
						{title:"번호", name:"COST_SEQ", colWidth:"5", order:true}
						, {title:"주차장명", name:"PARK_NAME", colWidth:"15"}
						, {title:"비용사유", name:"COST_CONT"}
						, {title:"금액", name:"COST_PRICE", type:"number", colWidth:"13"}
						, {title:"발생일", name:"COST_DATE", type:"date", colWidth:"20"}
						, {title : "수정", name: "modify", filter:function(data, rowData, ridx, cidx, $this){
		                    return `<a href="/profitCost/costUpdateForm?COST_SEQ=${rowData.COST_SEQ}" class="btn btn-outline-primary btn-sm">수정</a>`
		                }, colWidth:"10"}
						,
						{title : "삭제", name: "DEL", colWidth:"10", filter:function(data, rowData, ridx, cidx, $this) {
							return `<a class="btn btn-outline-danger btn-sm" onclick="cost.deleteRow(${ridx})">삭제</a>`
						}}
						],
						pagingEl : '#pagingBlock2',
						getParam : getParam
			};
			this.grid = new Grid("#costTable", $this.gridOption, "/costManage/selectListCost");
		},
		deleteRow: function(ridx) {
			   let $this = this;
			   let rowData = this.grid.getRowData(ridx);
			   cmm.confirm('삭제', '삭제하시겠습니까', null, function(){
			      
			      param = {'COST_SEQ': rowData.COST_SEQ};
			      
			      ajaxCall('/costManage/deleteCost', param, function(data) {
			         cmm.alert(data.message, function(){
			            if(data.code == 'S'){
			               grids[0].reSearch();
			            }
			         })
			      });
			   })
			}
}

$(function(){
	cost.initPage();
	ajaxCall(

	)
})

function getParam() {
	return {}}

let getDateRangeN = document.getElementById('datepickerN');

function searchDate(){

	let getSelectedRange = getDateRangeN.value;

	searchGrid('#costTable', '', getSelectedRange);

}

function inputNumberFormat(obj) {
	obj.value = comma(uncomma(obj.value));
}

function comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
	str = String(str);
	return str.replace(/[^\d]+/g, '');
}








