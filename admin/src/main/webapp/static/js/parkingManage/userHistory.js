
let history = {
		gridOption:{},
		grid : null,

		initPage: function(){
			let $this = this;
			this.gridOption = {
					cols : [
						{title:"번호", name:"RESE_SEQ", colWidth:"5", order:true}
						, {title:"주차장명", name:"PARK_NAME", colWidth:"17"}
						, {title:"예약 차량", name:"RESE_CAR_NO", colWidth:"12"}
						, {title:"예약 시작일", name:"RESE_START", type:"date" , colWidth:"23"}
						, {title:"예약 금액", name:"RESE_PRICE", type:"number", colWidth:"11", order:true}
						, {title:"구매일", name:"REG_DATE", type:"date"}
						,
						{title : "비고", name: "pr.NOTE", colWidth:"8"}
						],
						pagingEl : '#pagingBlock2',
						getParam : getParam
			};
			this.grid = new Grid("#userHistory", $this.gridOption, "/userHistory/selectListHistory");
		}
}

$(function(){
	history.initPage();
	// alert, comfirm .. > cmm.alert()
	// cmm.confirm


	// cmm

	// cmm.attachComma() >> 숫자 포맷 (콤마)
	// cmm.formToJson()
	// cmm.jsonToForm()
	ajaxCall(

	)
})

function getParam() {
	return {}
	
}

let getDateRangeN = document.getElementById('datepickerN');

function searchDate(){

	let getSelectedRange = getDateRangeN.value;

	searchGrid('#userHistory', '', getSelectedRange);

}






