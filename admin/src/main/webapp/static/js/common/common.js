/******************************************************************************
 * 공통 AJAX 호출
 * 작성자  : 임용휘
 * @param url - 요청할 url
 * @param params - 보낼 데이터
 * @param callback - 성공시 수행할 func	(안보내도됨)
 * @param errorCallback - 실패시 수행할 func (안보내도됨)
 * @param asyncType - 동기, 비동기 타입 기본false(비동기)
 * 작성일  : 20200527
 ******************************************************************************/
function ajaxCall(url, params, callback, errorCallback, asyncType){
    if(asyncType === undefined){asyncType=false}
    if(!callback){callback = function(){}}
    if(!errorCallback){errorCallback = function(e) {}}
    var commErrorCallback = function(xhr, status, err) {
        console.log(xhr.status+"error!");
        console.log(xhr);
        if (xhr.status == 401) {
            cmm.alert("인증에 실패 했습니다. 잠시후 다시 시도하거나 재로그인 하세요.", function(){
                return;
            });
        }
        if (xhr.status == 403) {
            cmm.alert("세션이 만료되었습니다. 메인 페이지로 이동합니다.", function(){
                location.href = "/";
            });
        }
    }


    // var token = $("meta[name='_csrf']").attr("content");
    // var header = $("meta[name='_csrf_header']").attr("content");
    return $.ajax({
        url : url,							// 클라이언트가 요청을 보낼 서버의 URL 주소
        data : JSON.stringify(params),		// HTTP 요청과 함께 서버로 보낼 데이터
        beforeSend : function(xhr){         // 보내기전 수행
            // xhr.setRequestHeader(header,token);
            FunLoadingBarStart(); //로딩바 생성
        },
        complete: function(){               // 수행완료 ( 성공/오류) 후 수행
            FunLoadingBarEnd(); //로딩바 제거
        },
        error : errorCallback,				// 에러CALLBACK
        type : "POST",						// HTTP 요청 방식(GET, POST)
        contentType : "application/json",	// data 의 데이터타입
        dataType: "json",               	// 서버에서 보내줄 데이터의 타입
        async : asyncType					// 동기 , 비동기
    }).done(callback)                       // 성공시
    .fail(commErrorCallback);               // 실패시
}

/**
 * 코드목록조회
 * @param m_code
 * @param list
 */
function getCodeList(m_code, callbk){
    ajaxCall('/code/getCodeList', {MST_CODE : m_code, USE_YN : 'Y'}, function(data){
        if(data.code == 'S'){
            if(typeof callbk == 'function'){
                callbk(data);
            }
        }
    })
}

/**
 * 로그아웃
 */
function logout(){
    ajaxCall("/auth/logout",{}, function(){
        location.href='/';
    })
}


/**
 * AJAX 호출 시 로딩바
 * 작성자 정혜진
 */
function FunLoadingBarStart() {

    // var backHeight = $(document).height(); //뒷 배경의 상하 폭
    // var backWidth = window.document.body.clientWidth; //뒷 배경의 좌우 폭
    //
    // var backGroundCover = "<div id='back'></div>"; //뒷 배경을 감쌀 커버
    //
    // var loadingBar = ''; //가운데 띄워 줄 로딩바
    // loadingBar += "<div class='spinner-border' id='loadingBar' role='status' style='width: 3rem; height: 3rem;' >";
    // loadingBar += "<span class='sr-only'>Loading...</span>";
    // loadingBar += "</div>";
    //
    // $('body').append($(backGroundCover).append(loadingBar));
    //
    // $('#back').css({ 'width': backWidth, 'height': backHeight, 'opacity': '0.15' });
    // $('#back').show();
    // $('#loadingBar').show();
}

function FunLoadingBarEnd() {
    // $('#back, #loadingBar').hide();
    // $('#back, #loadingBar').remove();
}

/******************************************************************************
 * 설명   : paging 그려줄놈
 * 작성자  : 임용휘
 * @param callback 눌렀을때 이동할 function ex ) getList(3)
 * @param divId 대상 div
 * @param current 현재페이지
 * @param fullSize 총갯수 (검색된 리스트 사이즈)
 * @param pageSize 보여질 페이지 수
 * @param listSize 한페이지에 보여질 글 수
 * 작성일 : 2019-06-04
 ******************************************************************************/
function paging(callback, divId, current, fullSize, pageSize, listSize){
    if(!current){current = 1;}    				//현재페이지
    if(!fullSize||fullSize==0){fullSize = 1;}   //리스트사이즈
    if(!pageSize){pageSize = 10;} 				//페이징목록 갯수
    if(!listSize){listSize = 10;} 				//한페이지에 보여질 글갯수

    var max = (Math.floor(current/pageSize)+1)*pageSize;	//최대 페이징넘버
    if(current % pageSize == 0){							//나누어떨어질때
        max = (Math.floor((current-1)/pageSize)+1)*pageSize;
    }

    var listMax = Math.floor(fullSize/listSize);		//리스트갯수로 뽑은 마지막페이지
    var first = Math.floor((current-1)/pageSize)*pageSize+1;
//	if(current % pageSize == 0){ 						//나누어떨어질때
//		first = Math.floor((current-1)/pageSize)*pageSize+1;
//	}

    if(fullSize % listSize != 0){ //나누어떨어지지않을때
        listMax += 1;
    }

    max = max > listMax? listMax : max; //리스트 수보다 목록최대값이 크면 리스트수로 고정;

    var $ul = $('<ul class="pagination justify-content-center">');

    var $prev = $('<li class="page-item"><a class="page-link"><</a></li>');
    if(current>pageSize){
        var prev = (Math.floor((current-pageSize)/pageSize) * pageSize) + pageSize;
        if(current% pageSize == 0){
            prev = (Math.floor((current-pageSize)/pageSize) * pageSize);
        }
        $prev.click(function(){callback(prev, prev*listSize-listSize, listSize)});
    }else{
        $prev.addClass('disabled');
    }
    $ul.append($prev);

    for(var i = first; i <= max ; i++){
        var tempStr = "";
        var tempObj = $('<li class="page-item" id="page'+i+'"><a class="page-link">'+i+'</a></li>');
        if(i==current){
            tempObj.addClass("active");
        }else{
            $(tempObj).click(function(){
                callback($(this).attr('id').replace('page',''),
                    $(this).attr('id').replace('page','')*1*listSize-listSize,
                    listSize)
            });
        }
        $ul.append(tempObj);
    }

    var $next =$('<li class="page-item"><a class="page-link">></a></li>');
    var next = (Math.floor((current-1)/pageSize)+1)*pageSize+1;
    if(next<=listMax){
        $next.click(function(){callback(next, next*listSize-listSize, listSize)});
    }else{
        $next.addClass('disabled');
    }
    $ul.append($next);
    $('#'+divId).empty();
    $('#'+divId).append($ul);
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

/**
 * Common 공통 function 정의
 */
Common = function(){
    var that = this;
    /**
     * Form 데이터 JSON 으로 변환
     */
    this.formToJson = function(form){
        var arr = $(form).serializeArray();
        var jsonObj = {};
        $.each(arr, function(idx,item){
            if(jsonObj.hasOwnProperty(item.name)){
                if(!(jsonObj[item.name] instanceof Array)){
                    var tmp = jsonObj[item.name];
                    jsonObj[item.name] = new Array();
                    jsonObj[item.name].push(tmp)
                }
                jsonObj[item.name].push(item.value);
            }else{
                jsonObj[item.name] = item.value
            }
        })

        $(form).find('input[disabled]').each(function(idx,item){
            jsonObj[$(item).attr('name')] = $(item).val();
        })
        $(form).find('select[disabled]').each(function(idx,item){
            jsonObj[$(item).attr('name')] = $(item).val();
        })
        $(form).find('input[type=radio]').each(function(idx){
            if($(this).prop('checked')){
                jsonObj[$(this).attr('name')] = $(this).val();
            }
        })
        $(form).find('input[type=checkbox],input[type=checkBox]').each(function(idx){
            if(!$(this).prop('checked')){
                if($(this).val() == 'Y'){
                    jsonObj[$(this).attr('name')] = 'N';
                }else{
                    jsonObj[$(this).attr('name')] = '';
                }
            }
        })

        return jsonObj;
    };

    /**
     * JSON 데이터 Form 으로 변환
     */
    this.jsonToForm = function(data, form){
        $.each(data, function(key,value){
            var target = $(form).find('input[name="'+key+'"]');
            if(target.length==0){
                target = $(form).find('select[name="'+key+'"]');
                if(target.length==0){
                    target = $(form).find('textarea[name="'+key+'"]');
                    if(target.length==0){
                        return;
                    }
                }
            }
            if(target.attr('type')){
                switch(target.attr('type').toLocaleLowerCase()){
                    case 'checkbox':
                        if(value == $(form).find('input[name="'+key+'"]').val()){
                            target.prop('checked',true);
                        }else{
                            target.prop('checked',false);
                        }
                        break;
                    case 'text' :
                    case 'hidden' :
                        if(target.hasClass('datepicker')){
                            target.val(cmm.formatDatetime(value,'yyyy-MM-dd'));
                        }else{
                            target.val(value);
                        }
                        break;
                    case 'radio' :
                        $(form).find('input[type="radio"][name="'+key+'"][value="'+value+'"]').prop('checked',true);
                        break;
                }
            }else{
                switch(target[0].tagName.toLocaleLowerCase()){
                    case 'select':
                        var option = target.find('option[value="'+value+'"]');
                        var selfFlag = false;
                        if(option.length == 0){
                            target.find('option').each(function(idx){
                                if($(this).text() == '직접입력'){
                                    option = $(this);
                                    selfFlag = true;
                                }
                            })
                        }
                        if(option.length > 0){
                            target.find('option:selected').each(function(idx, item){
                                $(item).prop('selected',false);
                            })
                            $(option).prop('selected',true);
                            if(selfFlag){
                                target.change();
                                setTimeout(function(){
                                    target.next('input').val(value);
                                },100);
                            }
                        }
                        break;
                    default :
                        target.val(value);
                        break;
                }
            }

        })
    };

    /*************************폼 유효성 검사*******************/
    this.formValidate=function(form){
        that = this;
        var flag = true;
        $(form).find("input:required").each(function(idx, item){
            if(flag && !that.inputValidate(item)){
                flag = false;
            }
        })
        if(flag){
            $(form).find("select:required").each(function(idx, item){
                if(flag && !that.inputValidate(item)){
                    flag = false;
                }
            })
        }
        if(flag){
            var radioFlag = false;
            var radioGroup = $(form).find("input:radio");
            if(radioGroup.length != 0){
                $(form).find("input:radio").each(function(idx, item){
                    if($(item).is(":checked")){
                        radioFlag = true;
                    }
                })
            } else if (radioGroup.length == 0 ){
                radioFlag = true;
            }
            flag = radioFlag;
        }
        return flag;
    };

    this.inputValidate = function(input){
        var flag = true;
        var val = input.value.replace(/(\s*)/g, ""); //공백체크, 공백을 없앰

        if(!val){
            flag= false;
        }
        return flag;
    }

    /**
     * 공통 confirm
     */
    this.confirmModal=null;
    this.confirm = function(title, message, option, okCallbk, cancelCallbk){
        if(this.confirmModal) {
            this.confirmModal.remove();
        }
        let btn1 = "확인";
        let btn2 = "취소";
        if(option){
        	if(option.hasOwnProperty("btn1"))
        		btn1 = option.btn1;
        	if(option.hasOwnProperty("btn2"))
        		btn2 = option.btn2;
        }
        var modalHtml=``;
        modalHtml+=`<div class="popWrap01">`;
        modalHtml+=`  <div class="popBg">`;
        modalHtml+=`    <span class="blind">${title}</span>`;
        modalHtml+=`  </div>`;
        modalHtml+=`  <div class="delPopup">`;
        modalHtml+=`    <div class="popTitle">`;
        modalHtml+=`    	<img src="/img/popup.svg">`;
        modalHtml+=`      	<h3> ${title} </h3>`;
        modalHtml+=`    </div>`;
        modalHtml+=`    <p> ${message} </p>`;
        modalHtml+=`    <div class="popBtn">`;
        modalHtml+=`      <button id="N" type="button" class="canselBtn">${btn2}</button>`;
        modalHtml+=`      <button id="Y" type="button" class="delBtn">${btn1}</button>`;
        modalHtml+=`  </div>`;
        modalHtml+=`</div>`;
        modalHtml+=`</div>`;
        $("body").append(modalHtml);
        this.confirmModal = $('.popWrap01')
        document.querySelector('.popWrap01').style.display = "block";

        var that =this;
        this.confirmModal.find("#Y").click(function(){
        	document.querySelector('.popWrap01').style.display = "none";
        	if(typeof okCallbk == 'function'){
        		okCallbk();
        	}
        	
        });
         this.confirmModal.find("#N").click(function(){
         	document.querySelector('.popWrap01').style.display = "none";
             if(typeof cancelCallbk == 'function'){
            	 cancelCallbk();
             }
         });
    }


    /**
     * 공통 alert
     */
    this.alertModal = null;
    this.alert=function(message, callbk, option){
    	if(this.alertModal) {
            this.alertModal.remove();
        }
        let btn = "확인";
        if(option){
        	if(option.hasOwnProperty("btn"))
        		btn = option.btn;
        }
        var modalHtml=``;
        modalHtml+=`<div class="popWrap02">`;
        modalHtml+=`  <div class="popBg">`;
        modalHtml+=`    <span class="blind"></span>`;
        modalHtml+=`  </div>`;
        modalHtml+=`  <div class="delPopup">`;
        modalHtml+=`    <div class="popTitle">`;
        modalHtml+=`    	<img src="/img/popup.svg">`;
        modalHtml+=`      	<h3></h3>`;
        modalHtml+=`    </div>`;
        modalHtml+=`    <p> ${message} </p>`;
        modalHtml+=`    <div class="popBtn">`;
        modalHtml+=`      <button id="O" type="button" class="delBtn">${btn}</button>`;
        modalHtml+=`  </div>`;
        modalHtml+=`</div>`;
        modalHtml+=`</div>`;
        $("body").append(modalHtml);
        this.alertModal = $('.popWrap02')
        document.querySelector('.popWrap02').style.display = "block";

        var that =this;
        this.alertModal.find("#O").off().click(function(){
            document.querySelector('.popWrap02').style.display = "none";
        	if(typeof callbk == 'function'){
        		callbk();
        	}
        });
    }

    /**
     * DatePicker로 기간 지정 (input 두 개)
     * 작성자 정혜진
     * 2020/07/07 - 김세영 days 파라미터 추가 (자동선택되는 기간)
     */
    this.makePeriodDatePicker = function(obj, name, days){
        if($(obj).length==0){
            return;
        }
        var height = '24px';
        var fullSize = $(obj).css('width');
        if($(obj).parent().hasClass('form-group')){
            var height = '32.39px';
        }else{
            if($(obj).parent().parent().hasClass('form-group')){
                var height = '32.39px';
            }
        }
        if(fullSize == '0px'){
            var fullSize = $(obj).parent().css('width');
        }

        fullSize = parseFloat(fullSize.replace('px',''));
        height = parseFloat(height.replace('px',''));
        /*이미지 3개 크기 24*3 */
        var imgSize = height;
        var borderSize = 3*2; //input이두개임
        var spanSize = 12;
        var inputSize = (fullSize - borderSize - spanSize - (imgSize * 3))/2;

        var $div = $('<div class="datepickerDiv"></div>');
        var $frInput = $('<input type="text" name="fr'+name+'" class="fromdatepicker" readonly/>').css('width', inputSize+'px');
        var $between = $('<div class="center"> ~ </div>').css('width', spanSize+'px');
        var $toInput = $('<input type="text" name="to'+name+'" class="todatepicker " readonly/>').css('width', inputSize+'px');
        var $clear = $('<img src="/static/pc/imgsmgs/eraser-solid.png" title="지우기" id="eraserImg"></img>').click(function(){
            $frInput.val('')
            $toInput.val('')
        });
        $(obj).append($div);
        $div.append($frInput)
        $div.append($between);
        $div.append($toInput);
        $div.append($clear);

        if(days==undefined){days=7;}
        var frOption = this.copyObject(cmst.dateOption);
        frOption.onClose = function( selectedDate ) {
            if(selectedDate == ''){
            }else{
                $div.find('.todatepicker').datepicker("setDate", new Date()).datepicker("option", "minDate", selectedDate);
                var changedDate = new Date(selectedDate);
                changedDate.setDate(changedDate.getDate() + days);

                $div.find('.todatepicker').datepicker(toOption).datepicker("setDate", changedDate);
            }
        }

        var toOption = this.copyObject(cmst.dateOption);
        toOption.onClose = function( selectedDate ) {
            $div.find('.fromdatepicker').datepicker("option", "maxDate", selectedDate);
        }

        var today = new Date();
        today.setDate(today.getDate() + days);

        $div.find('.fromdatepicker').datepicker(frOption);
        $div.find('.todatepicker').datepicker(toOption);
        $div.find('.fromdatepicker').attr('autocomplete','off');
        $div.find('.todatepicker').attr('autocomplete','off');
    }


    /**
     * DatePicker로 날짜 지정 (input 한 개)
     * 작성자 정혜진
     * date인자는 기본으로 세팅하고 싶은 날짜(입력 안할 시 디폴트세팅X)
     * date 인자 형식 : "yyyy-mm-dd"
     */
    this.makeDatePicker = function(obj, name, date){
        if($(obj).length==0){
            return;
        }
        var height = '24px';
        var fullSize = $(obj).css('width');
        if($(obj).parent().hasClass('form-group')){
            var height = '32.39px';
        }else{
            if($(obj).parent().parent().hasClass('form-group')){
                var height = '32.39px';
            }
        }
        if(fullSize == '0px'){
            var fullSize = $(obj).parent().css('width');
        }
        fullSize = parseFloat(fullSize.replace('px',''));
        height = parseFloat(height.replace('px',''));
        /*이미지 3개 크기 24*3 */
        var imgSize = height;
        var borderSize = 6;
        var spanSize = 12;
        var inputSize = (fullSize - borderSize - (imgSize * 2));


        var $div = $('<div class="datepickerDiv datepickerDiv-1"></div>');
        var $Input = $('<input type="text" name="'+name+'" class="datepicker" readonly/>').css('width', inputSize+'px');
        var $clear = $('<img src="/static/pc/imgsmgs/eraser-solid.png" title="지우기" id="eraserImg"></img>').css('width', height+'px').click(function(){
            $Input.val('')
        });

        $(obj).append($div);
        $div.append($Input);
        $div.append($clear);

        var option = this.copyObject(cmst.dateOption);

        if(date){
            console.log(new Date(date))
            var defaultDate = new Date(date);
            $div.find('.datepicker').datepicker(option).datepicker("setDate", defaultDate);
        } else {
            $div.find('.datepicker').datepicker(option);
        }

        $div.find('.datepicker').attr('autocomplete','off');
    }


    this.copyObject = function(obj){
        return JSON.parse(JSON.stringify(obj));
    }
    /**
     * 코드 Detail 조회
     * @param target = 대상 selectbox의 셀렉터
     * @param codeGrp = CODE_M 에 들어갈 값
     * @param params = 조회시 추가 옵션
     *
     * 작성자 임용휘
     * 작성일 2020-05-29
     */
    this.searchCode = function(m_code, callbk, params){
        if(!params){
            params = {};
        }
        params.MST_CODE = m_code;
        params.USE_YN = 'Y';
        ajaxCall('/code/getCodeList', params, function(data){
            if(data.code == 'S'){
                if(typeof callbk == 'function'){
                    callbk(data);
                }
            }
        })
    }
    /**
     * 코드조회하여 selectBox 구성
     *
     * @param target = 대상 selectbox의 셀렉터
     * @param codeGrp = CODE_M 에 들어갈 값
     * @param defaultOption = 기본값; value 는 공백으로 채워짐
     * @param defaultVal
     * @param params = 조회시 추가 옵션
     *
     * 작성자 임용휘
     * 작성일 2020-05-29
     */
    this.setCodeToSelect = function(target, codeGrp, defaultOption, defaultVal, params, callbk){
        let $target = $(target);
        if($target) {
            this.searchCode(codeGrp, function (data) {
                $target.empty();
                if (defaultOption) {
                    $target.append(`<option value="">${defaultOption}</option>`);
                }
                data.list.forEach((item, idx) => {
                    $target.append(`<option value="${item.CODE}" val="${item.CODE_VAL}" ${defaultVal && defaultVal == item.CODE_VAL ? 'selected="selected"': ''}>${item.CODE_NM}</option>`);
                });
                if (callbk) {
                    callbk($target);
                }
            }, params);
        }
        return $target;
    };


    /**
     * 코드조회하여 selectBox 구성
     *
     * @param target = 대상 selectbox의 셀렉터
     * @param defaultOption = 기본값; value 는 공백으로 채워짐
     * @param defaultVal
     *
     * 작성자 임용휘
     * 작성일 2020-05-29
     */
    this.setYnCodeToSelect = function(target, defaultOption,defaultVal){
        let $target = $(target);
        $target.empty();
        if (defaultOption) {
            $target.append(`<option value="">${defaultOption}</option>`);
        }
        $target.append(`<option value="Y" ${defaultVal && defaultVal == 'Y' ? 'selected="selected"': ''}> Y </option>`);
        $target.append(`<option value="N ${defaultVal && defaultVal == 'N' ? 'selected="selected"': ''}"> N </option>`);
        return $target;
    }
    /**
     * function setCodeToSelect_AddSelfIn
     * 코드조회하여 selectBox 구성, 직접입력 추가
     *
     * @param target = 대상 selectbox의 셀렉터
     * @param codeGrp = CODE_M 에 들어갈 값
     * @param defaultOption = 기본값; value 는 공백으로 채워짐
     * @param params = 조회시 추가 옵션
     *
     * 작성자 임용휘
     * 작성일 2020-05-29
     */
    this.setCodeToSelect_AddSelfIn = function(target, codeGrp, defaultOption , params, callbk){
        var name = $(target).attr('name');
        this.searchCode(codeGrp, params, function(data){
            $(target).empty();
            if(defaultOption){
                $(target).append('<option value="">'+defaultOption+'</option>');
            }
            $.each(data.list, function(idx, item){
                $(target).append('<option value="'+item.CODE+'">'+item.CODE_NAME+'</option>');
            });
            $(target).append('<option value="">직접입력</option>');

            if(callbk){
                callbk($(target));
            }

            /*직접입력 선택시 이벤트 추가 (기존 selectBox 의 name + _2로 변경, input name 에 셋팅)*/
            $(target).change(function(){
                if($(this).find('option:selected').text()=='직접입력'){
                    $(this).attr('name', name+"_2");
                    var $input =$('<input type="text" id="'+name+'_input" name="'+name+'" class="form-control" autocomplete="off">');
                    $input.attr('disabled', $(this).attr('disabled'));
                    $(this).after ($input);
                }else{
                    $(this).attr('name', name);
                    if($('#'+name+'_input')){
                        $('#'+name+'_input').remove();
                    }
                }
            })
        });


        return $(target);
    };
    /**
     * 코드조회하여 radio 구성
     * @param targetDiv = radio가 들어갈 div 셀렉터
     * @param name = radio 의 name속성
     * @param codeGrp = CODE_M 에 들어갈 값
     * @param defaultOption = 기본값; value 는 공백으로 채워짐
     * @param params = 조회시 추가 옵션
     *
     * 작성자 임용휘
     * 작성일 2020-05-29
     */
    this.setCodeToRadio = function(targetDiv, name, codeGrp, defaultOption , params){
        this.searchCode(codeGrp, params, function(data){
            $(targetDiv).empty();
            if(defaultOption){
                $(targetDiv).append('<label class="radioChild" for="jb-radio-'+item.CODE+'">'
                    +'<input type="radio" name="'+name+'" id="jb-radio">'+defaultOption
                    +'</label>');
            }
            $.each(data.list, function(idx, item){
                $(targetDiv).append('<label class="radioChild" for="jb-radio-'+item.CODE+'">'
                    +'<input type="radio" name="'+name+'" id="jb-radio-'+item.CODE+'" value="'+item.CODE+'">'+item.CODE_NAME
                    +'</label>');
            });
        });
    };

    /**
     * 코드조회하여 checkBox 구성
     * @param targetDiv = checkBox가 들어갈 div 셀렉터
     * @param name = checkBox 의 name속성
     * @param codeGrp = CODE_M 에 들어갈 값
     * @param defaultOption = 기본값; value 는 공백으로 채워짐
     * @param params = 조회시 추가 옵션
     *
     * 작성자 임용휘
     * 작성일 2020-05-29
     */
    this.setCodeToCheckBox = function(targetDiv, name, codeGrp, defaultOption , params){
        this.searchCode(codeGrp, params, function(data){
            $(targetDiv).empty();
            if(defaultOption){
                $(targetDiv).append('<label class="btn btn-primary">'
                    +'<input type="checkbox" name="'+name+'">'+defaultOption
                    +'</label>');
            }
            $.each(data.list, function(idx, item){
                $(targetDiv).append('<label class="btn btn-primary">'
                    +'<input type="checkbox" name="'+name+'" value="'+item.CODE+'">'+item.CODE_NAME
                    +'</label>');
            });
        });
    }

    this.formatDatetime = function(timeStr, format){
        if(!timeStr){return '';}
        var date = new Date(timeStr);
        if(!format){format = "yyyy-MM-dd hh:mm:ss"}

        var returnStr = format;
        var tmp = 0;
        returnStr = returnStr.replace(/yyyy/g, date.getFullYear());

        tmp = date.getMonth()+1;
        if(tmp<10){
            tmp = "0"+tmp;
        }
        returnStr = returnStr.replace(/MM/g,tmp);
        returnStr = returnStr.replace(/M/g,date.getMonth()+1);

        tmp = date.getDate();
        if(tmp< 10){
            tmp = '0'+tmp;
        }
        returnStr = returnStr.replace(/dd/g,tmp);
        returnStr = returnStr.replace(/d/g,date.getDate());

        tmp = date.getHours();
        if(tmp< 10){
            tmp = '0'+tmp;
        }
        returnStr = returnStr.replace(/hh/g,tmp);
        returnStr = returnStr.replace(/h/g,date.getHours());

        tmp = date.getMinutes();
        if(tmp< 10){
            tmp = '0'+tmp;
        }
        returnStr = returnStr.replace(/mm/g, tmp);
        returnStr = returnStr.replace(/m/g, date.getMinutes());

        tmp = date.getSeconds();
        if(tmp< 10){
            tmp = '0'+tmp;
        }
        returnStr = returnStr.replace(/ss/g,tmp);
        returnStr = returnStr.replace(/s/g, date.getSeconds());

        return returnStr;
    }

    this.formatDate = function(time, format){
        if(!time){return ''}
        return this.formatDatetime(time, format);
    }



    /*
     * 금액에 , 표시
     * 작성자 : 박소연
     */
    this.attachComma = function(val){
        var attachComma = '';
        if(val)
            attachComma = parseInt((val+'').replace(/,/gi,'')).toLocaleString();
        return attachComma;
    }

    /**
     * java단의 Stringify된 문자를 json으로 변환
     * {key=val ,key1=val1} >> {'key':'val', 'key1':'val1'}
     */
    this.strToJson = function(str){
        var json = {};
        var arr1 = str.split('{');
        if(arr1.length == 2){
            var arr2 = arr1[1].split('}');
            var arr3 = arr2[0].split(',');
            for(var i in arr3){
                var arr4 = arr3[i].split('=');
                json[arr4[0].replace(/ /g,'')] = arr4[1];
            }
        }
        return json;
    }
}

cmm = new Common();

function testLogin(){
	 ajaxCall("/test/testlogin", {}, function(data){
         console.log(data);
     })
}

