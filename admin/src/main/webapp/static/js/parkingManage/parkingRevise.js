var PARK_OPEN = "";
var PARK_CLOSE = "";

let parkingRevise = {
    PARK_SEQ : null,
    PARK_INFO : {},  // null값인 상태
    step:0,
    init : function(PARK_SEQ){
        this.PARK_SEQ = PARK_SEQ;
        this.searchOneParkingZone();
    },
    searchOneParkingZone:function(){
        let param = {
            PARK_SEQ : this.PARK_SEQ
        };
        let $this = this;
        ajaxCall("/parkingManage/selectOneParkingInfo", param, function(data){
            if(data.code == 'S') {
                console.log(data)
                $this.PARK_INFO = data.data;
                
                PARK_OPEN = data.data.PARK_OPEN;
                console.log(PARK_OPEN);
                
                PARK_CLOSE = data.data.PARK_CLOSE;
                console.log(PARK_CLOSE);
                
                $this.sections = $this.PARK_INFO.sections;
                if($this.sections.length>0){
                    $this.sections.forEach((item, index)=>{
                        /* 리터럴템플릿 >(탭 위의키:백틱) `` 로 감싸면 js변수를 ${} 로 호출할 수 있습니다. */
                        $(`input[name=SEC_TYPE][value=${item.SEC_TYPE}]`).prop('checked', true);
                        $(`#SEC_TYPE_${item.SEC_TYPE} input[name=SEC_COUNT]`).val(item.SEC_COUNT);
                        $(`#SEC_TYPE_${item.SEC_TYPE} input[name=SEC_DIS]`).val(item.SEC_DIS);
                    });
                }
                cmm.jsonToForm($this.PARK_INFO, "#parkingInfoDetailForm");
                /* open, close 시간 */
                document.querySelector('input[name="PARK_OPEN"]').value = PARK_OPEN;
                document.querySelector('input[name="PARK_CLOSE"]').value = PARK_CLOSE;
            } else {
                cmm.alert(data.message);
            }
        })
    },
    chkSection : function(){
        $('input[name=SEC_TYPE]').each(function(){
            if($(this).prop('checked')){
                $(`#SEC_TYPE_${this.value}`).show();
                $(`#SEC_TYPE_${this.value}`).find('input').prop('disabled',false);
            }else{
                $(`#SEC_TYPE_${this.value}`).hide();
                $(`#SEC_TYPE_${this.value}`).find('input').prop('disabled',true);
            }
        })
    },

    prevStep:function(){
    	
        this.step--;
        $('.tab-content.selected').removeClass('selected');
        $(`.tab-content:eq(${this.step})`).addClass('selected');
        this.chkSection();
    },
    
    /* 구역 선택 체크 박스  유효성 검사 - 전지나  */
    nextStep:function(){
    	
    	if(!$('input[name=SEC_TYPE]').is(':checked')){
    		alert("등록할 주차 구역을 최소 한 개 이상 선택하세요.");
    		return; // 해당 함수 다음 단계(this.step)로 가지 않고 종료.
    	}
    	
        this.step++;
        
        $('.tab-content.selected').removeClass('selected');
        $(`.tab-content:eq(${this.step})`).addClass('selected');
        
        this.chkSection();
    },
    
    
    /* 구역 개수 & 할인율 input 구역 - 전지나  */	
    nextStep2:function(){
    	
    	let isEmpty1 = false;
    	let isEmpty2 = false;
    	let numOver = false;
    	
    	// 가려지지 않은 섹션 선택, 
    	$('input:enabled[name=SEC_COUNT]').each(function(index,element){
    		if($(element).val() == ''){
    			isEmpty1 = true;
    		}
    	});
    	
    	if(isEmpty1){
    		alert("주차 가능 대수 및 할인율을 누락없이 입력해주세요.");            	
    		return;
    	}
    	
    	$('input:enabled[name=SEC_DIS]').each(function(index,element){
    		if($(element).val() == ''){
    			isEmpty2 = true;
    		}
    		if ($(element).val() > 100){
    			numOver = true;
    		} 
    	});
    	
    	if(isEmpty2){
    		alert("주차 가능 대수 및 할인율을 누락없이 입력해주세요.");            	
    		return;
    	}
    	
    	if(numOver){
    		alert("할인율은 숫자 100이하로 입력 가능합니다.");
    		return;
    	}

        this.step++;
        
        $('.tab-content.selected').removeClass('selected');
        $(`.tab-content:eq(${this.step})`).addClass('selected');
    },
      
    
    validForm:function(){
        console.log(cmm.formToJson('#parkingInfoDetailForm'))
        //TODO validate
        return true;
    }
    
}



function onlyNum(){
    if(event.keyCode<48 || event.keyCode>57){
    	event.returnValue=false;
    }
}


function checkForm(){
	
	if($('input[name=PARK_NAME]').val() == ""){
		alert("주차장명을 입력해주세요.");
		return false;
	}
	
	if($('input[name=PARK_PRICE]').val() == ""){
		alert("시간 당 주차 요금을 입력해주세요.");
		return false;
	}
	
	if($('input[name=PARK_ADDR1]').val() == ""){
		alert("주차장 위치를 입력해주세요.");
		return false;
	}
	
	if($('input[name=PARK_CALL_NUM]').val() == ""){
		alert("주차장 전화번호를 입력해주세요.");
		return false;
	}
	
	if($('input[name=PARK_CONT]').val() == ""){
		alert("주차장 설명을 입력해주세요.");
		return false;
	}
	return true;
	
}

/* 
 * 이미지 미리보기&숫자만 입력 
 * 작성자 : 전지나
 */
const inputThumbnail = document.getElementById("file");
const thumbNail = document.getElementById("thumbNail");
function readImage(event) {
	  var urlsrc = URL.createObjectURL(event.target.files[0]);
	  thumbNail.src = urlsrc;
	  }
	inputThumbnail.addEventListener("change", readImage)
	

	




