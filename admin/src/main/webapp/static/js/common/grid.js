/**
 * 공통 그리드
 * @param tblEl
 * @param options
 * @param searchApiUrl
 * @param searchFunc
 * @returns {Grid}
 * @constructor
 *
 * 옵션 예시 ex)
 * @cols type=Array<Object>
 *     컬럼속성 Object
 *          - title      = "header명칭"
 *          - className  = "TD 에들어갈 클래스명"
 *          - name       = "DATA 가 파싱될 변수명 ( 컬럼명)"
 *          - type       = "컬럼유형 (text(기본), number(콤마추가), date(날짜형, 포맷자동변환/기본YYYY-MM-DD)"
 *          - filter     = "커스텀 필터링 (데이터 변환)"
 *          - codeFilter = "코드값으로 변환해줌"
 *          - order      = "정렬이 필요한 컬럼"
 *          - align      = "text-align 지정 (right, center, left)"
 * @pagingEl - 페이징 영역 element선택자 / 없을시 페이징 안그림;
 * @getParam - 조회할때 필요한 파라미터 반환 함수명 ( 페이지내 메서드 구현필요;)
 * @onRowClick - row클릭 이벤트 함수명 파라미터 기본(rowIdx, element)반환
 *
 * let options = {
 *         cols : [
 *             {title : "NO", className:  null, name: "LIME_POINT_HIST_SEQ", type:"number"},
 *             {title : "소속", name: "AFFILIATED", filter:function(data){
 *                     if(data == 1 ){
 *                         return '라임'
 *                     }else{
 *                         return '크루'
 *                     }
 *                     return '';
 *                 }
 *             },
 *             {title : "이름", name: "EMPLOYEE_NAME"},
 *             {title : "전환 분류", name: "POINT_TYPE", defaultData: '테스터', codeFilter:'PT01'},
 *             {title : "사용 포인트", name: "POINT", type:"number"},
 *             {title : "잔여 포인트", name: "CUR_POINT", type:"number"},
 *             {title : "사용 일자", name: "REG_DATE", type:"date"},
 *         ],
 *         pagingEl : '#pagingBlock',
 *         getParam : getParam,
 *         onRowClick : 'onRowClick'
 * }
 *
 *
 *
 *
 */
let grids = [];
var Grid = function(tblEl, options, searchApiUrl){
    this.selector = tblEl;
    this.$tbl = $(this.selector);
    this.url = searchApiUrl;
    this.$pagingEl = null;
    this.cols = [];
    this.list = [];
    this.totalCnt = 0;
    this.codes = {}
    this.onRowClick = '';
    this.colWidth = 10;
    this.showCols = 0;
    this.orderCol = '';
    this.orderType = '';
    this.searchCondition = '';
    this.searchKey = '';


    this.pagingOpt = {
        page : 1,       //현재페이지
        total : 0,      //총게시물수
        rowCnt : 10,    //페이지당 보여질 데이터수
        blockCnt : 10,  // 페이징 블록의 크기 ex) 10 >>  < 1 2 3 4 5 6 7 8 9 10 >
        start : 1,      // 블록의 시작점   ex )  1
        end : 1,        // 블록의 종료시점  ex ) 10
        max : 1,        // 끝페이지 마지막 페이지
        next : 1,       // 다음블록
        prev : 1        // 이전블록
    }

    if(options.cols){
        this.cols = options.cols;
        let cnt = 0;
        let hiddenCnt = 0;
        let size = 0;
        this.cols.forEach((col)=>{
            if(col.type=='hidden'){
                hiddenCnt ++;
            }else if(col.hasOwnProperty("colWidth")){
                cnt ++;
                size += col.colWidth;
            }

        })
        this.showCols = this.cols.length - hiddenCnt;
        let nonSizeCnt = this.showCols -cnt;//자동계산될 사이즈
        this.colWidth = (100 - size)/nonSizeCnt;
    }

    if(options.pagingEl){
        this.$pagingEl = $(options.pagingEl);
    }
    if (typeof options.getParam == 'function') {
        this.getParam = options.getParam;
    }
    if (options.onRowClick) {
        this.onRowClick = options.onRowClick;
    }
    if (options.pagingOpt) {
        if (options.pagingOpt.page)
            this.pagingOpt.page = options.pagingOpt.page;
        if (options.pagingOpt.rowCnt)
            this.pagingOpt.rowCnt = options.pagingOpt.rowCnt;
        if (options.pagingOpt.blockCnt)
            this.pagingOpt.blockCnt = options.pagingOpt.blockCnt;
    }
    /**
     * 코드 필터링 적용하기 위해 목록 조회
     */
    this.initCode = function(){
        let $this = this;
        $this.cols.forEach((item,index)=>{
            if(item.hasOwnProperty("codeFilter")) {
                cmm.searchCode(item.codeFilter, function (data) {
                    $this.codes[item.codeFilter] = data.list;
                })
            }
        })
    }
    this.initCode();

    /**
     * 공통코드 필터
     * @param code
     * @param data
     * @returns {*}
     */
    this.codeFilter = function(code, data){
        let $this = this;
        let code_name = data;
        if($this.codes.hasOwnProperty(code)) {
            $this.codes[code].forEach((item, index) => {
                if (item.CODE == data) {
                    code_name = item.CODE_NM;
                }
            })
        }
        return code_name;
    }

    this.drawColGroup =function(){
        this.$tbl.find('colgroup').remove();
        let $this = this;
        let colgroup = `<colgroup>`;
        this.cols.forEach((item, index)=>{
            colgroup += `<col style="width:${item.colWidth ? item.colWidth : $this.colWidth}%;">`
        });
        colgroup+=`</colgorup>`;
        this.$tbl.append(colgroup);
    }

    /**
     * 헤더 그리기
     */
    this.drawHeaders = function(){
        this.$tbl.find('thead').remove();
        let html = '<thead>';

        let $this = this;
        this.cols.forEach((item, index)=>{
            html += `<th class="${item.className?item.className:''}" `;
            if(item.order)
                html += `onclick="changeOrder(this, '${$this.selector}',${index})" `;
            html += `> ${item.title} </th>`;
        })
        html += '</tr>';
        html += '</thead>';
        this.$tbl.append(html);
        $this.drawHeaderClass();
    }

    this.drawHeaderClass = function(){
        let $this = this;
        this.$tbl.find('thead tr th').toArray().forEach((item,index)=>{
            if($this.cols[index].order){
                $(item).removeClass("ASC");
                $(item).removeClass("DESC");
                $(item).removeClass("ORDER");
                if($this.orderCol == $this.cols[index].name) {
                    if($this.orderType == 'ASC'){
                        $(item).addClass("DESC");
                    }else{
                        $(item).addClass("ASC")

                    }
                }else{
                    $(item).addClass("ORDER");
                }
            }
        })
    }

    /**
     * order 옵션 초기화
     */
    this.clearOrder = function(){
        this.orderCol=null;
        this.orderType=null;
    }

    /**
     * 조회
     * @param page
     */
    this.search = function(page){
        let $this = this;
        let params = $this.getParam();
        if(!page){
            page = 1;
        }
        if(this.$pagingEl){
            params.PAGING_YN    = 'Y';
            params.START        = (page-1) * $this.pagingOpt.rowCnt;
            params.CNT          = $this.pagingOpt.rowCnt;
        }
        if(this.orderCol){
            params.ORDER = this.orderCol;
            params.ORDER_TYPE = this.orderType;
        }

        if(this.searchCondition){
            params.SEARCHCOND = this.searchCondition;
        }

        if(this.searchKey) {
            params.SEARCHKEY = this.searchKey;
        }

        this.pagingOpt.page = page;
        ajaxCall($this.url, params, function (data) {
            $this.list = data.list;
            $this.pagingOpt.total = data.totalCnt;
            $this.drawList();
            $this.drawPaging();
        })
    }

    this.excelDown = function(url) {
        let $this = this;
        let params = $this.getParam();

        if($this.searchCondition){
            location.href = url + '?' + "SEARCHCOND=" + this.searchCondition + "&SEARCHKEY=" + this.searchKey;
        } else {
            location.href = url
        }

    }


    /**
     * 현재페이지로 재조회
     * @param
     * @return
     */
    this.reSearch = function(){
        this.search(this.pagingOpt.page);
    }

    /**
     * 해당 인덱스의 데이터 조회
     * @param ridx
     * @returns {*}
     */
    this.getRowData = function(ridx){
        return this.list[ridx];
    }

    /**
     * 해당 인덱스의 데이터 조회
     * @param ridx
     * @returns {*}
     */
    this.getColData = function(cidx){
        return this.cols[cidx];
    }


    /**
     * 데이터 행 그리기
     */
    this.drawList = function(){
        this.$tbl.find('tbody').remove();
        let $this = this;
        let html = `<tbody>`;
        if($this.list && this.list.length > 0) {
            $this.list.forEach((row, ridx) => {
                html += `<tr onclick="${this.onRowClick + '(' + ridx} ,this)">`
                $this.cols.forEach((col, cidx) => {
                    html += $this.drawColumn(col, row, ridx, cidx);
                })
                html += `</tr>`
            })
        }else{
            html += `<tr><td colspan="${this.showCols}">조회된 데이터가 없습니다.</td></tr>`;
        }
        html += `</tbody>`
        this.$tbl.append(html);
    }

    /**
     * 컬럼 타입별 html 그리기
     * @param col
     * @param rowData
     * @returns {string}
     */
    this.drawColumn = function(col, rowData, ridx, cidx){
        let html = `<td ${col.align? "style=\"text-align:"+col.align+"\"":""}>`
        let $this = this;
        if(!col.type){
            col.type = 'text';
        }
        let data = rowData[col.name] != null ? rowData[col.name] : col.defaultData ? col.defaultData : '';
        if(typeof col.filter == 'function'){    // 커스텀 필터 있을경우
            data = col.filter(data, rowData, ridx, cidx, $this);
        }
        if(col.codeFilter){                    // 코드필터 적용시
            data = $this.codeFilter(col.codeFilter, data);
        }
        switch (col.type){
            case 'number' :
                html += cmm.attachComma(data);
                break;
            case 'date' :
                html += moment(data).format(col.format ? col.format :'YYYY-MM-DD HH:mm');
                break;
            case 'text' :
            default :
                html += data;
                break;
        }
        html += `</td>`;
        return html;
    }

    /**
     * 페이징영역 그리기
     */
    this.drawPaging = function(){
        let $this = this;
        if($this.$pagingEl) {
            $this.$pagingEl.empty();
            $this.setRange();
            let html = ``;
            html += ``;
            html += `<ul class="pagination link">`;
            html += `    <li>`;
            html += `        <a class="first ${$this.pagingOpt.page == 1 ? 'nonePointer' : ''}" onclick="girdPageMove('${$this.selector}', ${$this.pagingOpt.page-1})">&lt;</a>`;
            html += `    </li>`;
            for(let pageNum=$this.pagingOpt.start; pageNum<=$this.pagingOpt.end; pageNum++) {
                if(pageNum==$this.pagingOpt.page) {
                    html += `    <li>`;
                	html += `        <a class="active num" onclick="girdPageMove('${$this.selector}', ${pageNum})"}">${pageNum}</a>`;}
                else {
                    html += `    <li>`;
                	html += `        <a class="num" onclick="girdPageMove('${$this.selector}', ${pageNum})"}">${pageNum}</a>`;}
                html += `    </li>`;
            }
            html += `    <li>`;
            html += `        <a class="last ${$this.pagingOpt.page == 1 ? 'nonePointer' : ''}" onclick="girdPageMove('${$this.selector}', ${$this.pagingOpt.page+1})">&gt;</a>`;
            html += `    </li>`;
            html += `</ul>`;
            html += ``;

            this.$pagingEl.html(html);
        }
    }
    /**
     * 페이징 변수 계산
     */
    this.setRange = function(){
        this.pagingOpt.max = Math.ceil(this.pagingOpt.total / this.pagingOpt.rowCnt);
        this.pagingOpt.end = Math.ceil(this.pagingOpt.page / this.pagingOpt.blockCnt) * this.pagingOpt.blockCnt;
        this.pagingOpt.start = this.pagingOpt.end - (this.pagingOpt.blockCnt-1);
        if(this.pagingOpt.end > this.pagingOpt.max) this.pagingOpt.end = this.pagingOpt.max;
        if(this.pagingOpt.end == 0 || isNaN(this.pagingOpt.end)){this.pagingOpt.end = 1;}
        if(this.pagingOpt.max == 0 || isNaN(this.pagingOpt.max)){this.pagingOpt.max = 1;}
        this.pagingOpt.next = this.pagingOpt.end+1;
        this.pagingOpt.prev = this.pagingOpt.start-1;
    }

    this.drawColGroup();
    this.drawHeaders();
    this.search();
    grids.push(this);
    return this;
}

/**
 * 그리드 선택자로 그리드 찾기
 * @param gridSelector
 * @return {null|*}
 */
function findGrid(gridSelector){
    for(let i in grids){
        if(grids[i].selector == gridSelector)
            return grids[i]
    }
    return null;
}

/**
 * 페이지이동 전역
 * @param gridSelector
 * @param page
 */
function girdPageMove(gridSelector, page){
    findGrid(gridSelector).search(page);
}

/**
 * 오더변경 전역
 * @param obj
 * @param gridSelector
 * @param colIdx
 */
function changeOrder(obj, gridSelector, colIdx){
    let $this = findGrid(gridSelector);
    if($this.orderCol == $this.cols[colIdx].name){
        if($this.orderType == 'ASC'){
            $this.orderType = 'DESC';
        } else {
            $this.orderType = 'ASC';
        }
    }else{
        $this.orderCol = $this.cols[colIdx].name;
        $this.orderType = 'ASC';
    }
    $this.drawHeaderClass();
    $this.reSearch();
}

/**
 *  작성자: 김청룡
 *  작성일: 22-03-13
 *  키워드 검색
 *  @param String 검색어
 *  @param String 검색조건
 *  @param gridSelector
 * **/

function searchGrid(gridSelector, condition, key){
    let $this = findGrid(gridSelector);
    if(key != undefined) {
        $this.searchKey = key;
    }
    if(condition != ''){
        $this.searchCondition = condition;
    }
    $this.search();
}

/**
 *  작성자: 김청룡
 *  작성일: 22-03-16
 *  엑셀다운로드
 *
 * **/

function excelDown(gridSelector, url){
    findGrid(gridSelector).excelDown(url);
}
