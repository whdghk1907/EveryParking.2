function onlyNum(){
    if(event.keyCode<48 || event.keyCode>57){
    	event.returnValue=false;
    }
}

const inputThumbnail = document.getElementById("inputThumbnail");
const thumbNail = document.getElementById("thumbNail");
function readImage(event) {
	  var urlsrc = URL.createObjectURL(event.target.files[0]);
	  thumbNail.src = urlsrc;
	  }
	inputThumbnail.addEventListener("change", readImage)
	
$("#couponBtn").on("click",function(){
	var CouName = $("#inputCouName").val();
	var CouFile = $("#inputThumbnail").val();
	var CouPrice = $("#inputCouPrice").val();
	var CouCount = $("#inputCouCount").val();
	
	
	if(CouName == ""){
		cmm.alert("쿠폰명을 입력해주세요.");
		return false;
	}
	
	if(CouFile == ""){
		cmm.alert("이미지를 넣어주세요.");
		return false;
	}
	
	if(CouPrice == ""){
		cmm.alert("쿠폰 가격을 입력해주세요.");
		return false;
	}
	
	if(CouCount == ""){
		cmm.alert("쿠폰 발행수를 입력해주세요.");
		return false;
	}
	
	return true;
	$("#cou").submit();
	
});	