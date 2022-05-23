let parkingZone = {
    gridOption:{},
    grid : null,
    initPage: function(){
        let $this = this;
        this.gridOption = {
            cols : [
                {title : "번호", name: "PARK_SEQ", type:"number", colWidth:"10", order: true},
                {title : "주차장명", name: "PARK_NAME", colWidth:"20" },
                {title : "주차장 주소", name: "PARK_ADDR1"},
                {title : "수정", name: "modify", filter:function(data, rowData, ridx, cidx, $this){

                    return `<a href="/parkingManage/parkingRevise?PARK_SEQ=${rowData.PARK_SEQ}" class="btn btn-outline-primary btn-sm">수정</a>`
                }, colWidth:"10"},
                {title : "삭제", name: "PARK_SEQ", filter:function(data, rowData, ridx, cidx, $this) {
                    return `<a class="btn btn-outline-danger btn-sm" onclick="parkingZone.deleteRow(${ridx})">삭제</a>`
                }, colWidth:"10"},
            ],
            pagingEl : '#pagingBlock2',
            getParam : getParam
        };
        this.grid = new Grid("#parkingZoneTable", $this.gridOption,"/parkingManage/selectListParkingInfo");
    },
    deleteRow : function(ridx){
    	let rowData = this.grid.getRowData(ridx);
    	param = {'PARK_SEQ': rowData.PARK_SEQ};
        ajaxCall('/parkingManage/deleteParkingInfo', param, function(data) {
        	cmm.alert(data.message, function(){
        		if(data.code == 'S'){
                    grids[0].reSearch();
        		}
        	})
        });
        
    }
}
function getParam(){
    return {}
}

$(function(){
    parkingZone.initPage();
    // alert, comfirm .. > cmm.alert()
    // cmm.confirm


    // cmm

    // cmm.attachComma() >> 숫자 포맷 (콤마)
    // cmm.formToJson()
    // cmm.jsonToForm()
    ajaxCall(

    )
})
