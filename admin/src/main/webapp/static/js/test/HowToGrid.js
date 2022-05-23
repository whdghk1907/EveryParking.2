
let testGrid;

$(function(){
    let gridOption = {
        cols:[
            {title:"test_no", name:"cache_size", type:"number"}
            , {title:"title", name:"cycle_count", type:"number"}
            , {title:"datestring", name:"cycle_option"}
            , {title:"reason", name:"increment"}
            , {title:"area", name:"maximum_value"}
            , {title:"명칭9", name:"button", defaultData:"Y", filter:function(){
                    return '<button onclick="clickTest()">클릭</button>'
                }}
        ],
        onRowClick:  "onRowClick",
        $pagingEl:'#pagingBlock',

        getParam : getParam
    };
    testGrid = new Grid("#testGrid", gridOption, "../test/testAjax", search);
})
function getParam(){
    return {}
}
function search(page){
    testGrid.search(page)
}
