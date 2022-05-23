const todayBuy = document.getElementById('today');
const yesterday = document.getElementById('yesterday');
const totalday = document.getElementById('totalday');
const qna = document.getElementById('qna');
const noti = document.getElementById('noti');
const flucToday = document.getElementById('flucToday');
const flucWeek = document.getElementById('flucWeek');

window.addEventListener('DOMContentLoaded', e => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200) {
            const data = JSON.parse(xhr.responseText).data;
            todayBuy.innerText = data.tocn;
            yesterday.innerText = data.yecn;
            totalday.innerText = data.ttcn;

            data.noti.forEach( (item, index) => {
            	mainhtml = ``;
                mainhtml +=`<li>`
                mainhtml +=`    <a href="/noticeManagement/readNoticePage?NOTI_SEQ=${item.NOTI_SEQ}">`
	            mainhtml +=`    	<p class="mainMiniTable">${item.NOTI_TITLE}</p>`
	            mainhtml +=`    	<span> ${moment(item.REG_DATE).format('YYYY-MM-DD')} </span>`
                mainhtml +=`	</a>`
                mainhtml +=`</li>`
                $("#noti").append(mainhtml);
            })
            data.qna.forEach( (item, index) => {
            	mainhtml = ``;
                mainhtml +=`<li>`
                mainhtml +=`    <a href="/qnaManage/readQnaPage?QNA_SEQ=${item.QNA_SEQ}">`
	            mainhtml +=`    	<p class="mainMiniTable">${item.QNA_TITLE}</p>`
	            mainhtml +=`    	<span> ${moment(item.REG_DATE).format('YYYY-MM-DD')} </span>`
                mainhtml +=`	</a>`
                mainhtml +=`</li>`
                $("#qna").append(mainhtml);
            })
        }
    }
    xhr.open("get", "/com/main");
    xhr.send();
})


