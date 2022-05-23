window.addEventListener('DOMContentLoaded', e=> {
	refreshComment();
	setInterval(refreshComment, 3000);
	
});


var scrollLock = false;
var lastChatSeq = 0;


function writeCommentProcess(){
	
	var reciverInput = document.getElementById("reciverInput");
	if(reciverInput.value == ""){
		alert("채팅 대상을 선택해주세요.");
		return;
	} else {
		var chat_recive = reciverInput.value;
	}
	
	var commentInput = document.getElementById("commentInput");
	if(commentInput.value == ""){
		alert("댓글을 입력해주세요.");
		return;
	} else {
		var chat_cont = commentInput.value;
	}
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){ 
		   var data = JSON.parse(xhr.responseText);
		   
		   commentInput.value = "";
		   refreshComment();
		}
	};
	xhr.open("post", "./insertAdminChatProcess", true);
	xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.send("CHAT_RECIV="+ chat_recive + "&CHAT_CONT=" + chat_cont);
	
}


function refreshComment(){
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){ 
		   var data = JSON.parse(xhr.responseText);
		   
		   var firstColBox = document.getElementById("appendBox");
		   
		   for(chat of data.allList){
			   
			   lastChatSeq = chat.CHAT_SEQ; 
			   
			   if(chat.CHAT_SENDE != data.ADMIN_SEQ){
				   
				   var userChatRowBox = document.createElement("div");
				   userChatRowBox.setAttribute("class", "row my-2");
				   userChatRowBox.setAttribute("style", "margin:auto");
				   firstColBox.appendChild(userChatRowBox);
				   
				   var userChatColBox = document.createElement("div");
				   userChatColBox.setAttribute("class", "col-8 my-2 me-auto");
				   userChatRowBox.appendChild(userChatColBox);
				   
				   var userIdRowBox = document.createElement("div");
				   userIdRowBox.setAttribute("class", "row mb-1 me-auto");
				   userChatColBox.appendChild(userIdRowBox);
				   
				   var userIdColBox = document.createElement("div");
				   userIdColBox.setAttribute("class", "col px-0 idBox");
				   userIdColBox.innerText = chat.USER_MAIL;
				   userIdRowBox.appendChild(userIdColBox);
				   
				   var userContentRowBox = document.createElement("div");
				   userContentRowBox.setAttribute("class", "row py-1 me-auto");
				   userContentRowBox.setAttribute("onclick", `selectChange(${chat.USER_SEQ}, '${chat.USER_MAIL}')`); 
				   userContentRowBox.setAttribute("style", "width:fit-content;cursor: pointer;");
				   userChatColBox.appendChild(userContentRowBox);
				   
				   var userContentColBox = document.createElement("div");
				   userContentColBox.setAttribute("class", "px-3 py-2 contentBox");
				   userContentColBox.innerText = chat.CHAT_CONT;
				   userContentRowBox.appendChild(userContentColBox);
				   
					var adminDate = document.createElement("div");
					adminDate.setAttribute("class", "chatDate mx-2");
					if(chat.CHAT_AMPM == 'AM'){
						adminDate.innerText = "오전 " + chat.CHAT_TIME;
					} else {
						adminDate.innerText = "오후 " + chat.CHAT_TIME;
					}
					userContentRowBox.appendChild(adminDate);
				   
			   } else {
				   
				   // 관리자 채팅
				   var adminChatRowBox = document.createElement("div");
				   adminChatRowBox.setAttribute("class", "row my-2");
				   adminChatRowBox.setAttribute("style", "margin:auto");
				   firstColBox.appendChild(adminChatRowBox);
				   
				   var adminChatColBox = document.createElement("div");
				   adminChatColBox.setAttribute("class", "col-8 my-2 ms-auto");
				   adminChatRowBox.appendChild(adminChatColBox);
				   
				   
				   var adminContentRowBox = document.createElement("div");
				   adminContentRowBox.setAttribute("class", "row py-1");
				   adminContentRowBox.setAttribute("style", "width:fit-content;float:right");
				   adminChatColBox.appendChild(adminContentRowBox);
				   
				   var adminDateBox = document.createElement("div");
				   adminDateBox.setAttribute("class", "chatDate mx-2");
				   adminDateBox.innerText = chat.CHATDATE;
				   if(chat.CHAT_AMPM == 'AM'){
					   adminDateBox.innerText = "오전 " + chat.CHAT_TIME;
					} else {
						adminDateBox.innerText = "오후 " + chat.CHAT_TIME;
					}
				   adminContentRowBox.appendChild(adminDateBox);
				   
				   var adminContentBox = document.createElement("div");
				   adminContentBox.setAttribute("class", "px-3 py-2 contentAdminBox");
				   adminContentBox.setAttribute("style", "background-color:#f1f1f1");
				   adminContentBox.innerText = chat.CHAT_CONT;
				   adminContentRowBox.appendChild(adminContentBox);
			   }
			   
		   }
			if(!scrollLock){ 
				// 해당 부분의 전체 페이지를 맨 아래로 스크롤하려는 경우, 
				chatContentBox.scrollTop = chatContentBox.scrollHeight;
			}
		}
	};
	xhr.open("get", "./getChatAllList?lastChatSeq="+lastChatSeq, true);
	xhr.send();
}


function selectChange(USER_SEQ, USER_MAIL){
	
	var reciverInput = document.getElementById("reciverInput");
	
	// 옵션 값들 가져오기
	var optionList = document.querySelectorAll('option');
	// 옵션 값들과 선택한 값이 같은지 확인
	for(var i=0; i < optionList.length; i++){
		if(optionList[i].value == USER_SEQ){
			optionList[i].selected = true;
			// 이것도 가능
			//reciverInput.selectedIndex = i;
		}
	}
}


function changeLock(){
	
	var lockIcon = document.getElementById("lockIcon");
	
	if(lockIcon.classList.contains('lock')){
		lockIcon.classList.remove('lock');
		lockIcon.classList.add('unlock');
		scrollLock = false;
	} else {
		lockIcon.classList.remove('unlock');
		lockIcon.classList.add('lock');		
		scrollLock = true;
	}
}
