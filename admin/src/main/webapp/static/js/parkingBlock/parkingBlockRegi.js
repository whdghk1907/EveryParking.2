window.onload = function(){
    const blockParkSelect = document.querySelector('.inputPlusSelectBox');
    const blockParkDate = document.querySelector('.drp-selected');
    const blockFormData = document.getElementById('blockFormData');
    const applyBtn = document.querySelector('.applyBtn');

    function getSectionInfo() {
        if(blockFormData){
        	blockParkDate.innerText = blockParkDate.innerText.replaceAll("00", "")
            var params = {'PARK_SEQ': blockParkSelect.value, "daterange": blockParkDate.innerText};
            params.PARK_SEQ = blockParkSelect.value;
            params.daterange = blockParkDate.innerText;
            ajaxCall('/parkingBlock/getSectionInfo', params, function(data) {
                var secList = data.list;
                $("#selectSection").html("");
                secList.forEach((item, index) => {
                    if(item.SEC_COUNT - item.SEC_USE <= 0) {
                        let SEChtml = ``;
                        SEChtml += `<div class="mainCon-TopWrap" style="align-items: center; margin-bottom: 10px;">`;
                        SEChtml += `    <span>${item.SUB_NAME}&nbsp;&nbsp;</span><span> 만차입니다</span> `;
                        SEChtml += `</div>`;
                        $("#selectSection").append(SEChtml);
                    } else {
                        let SEChtml = ``;
                        SEChtml += `<div class="mainCon-TopWrap" style="align-items: center; margin-bottom: 10px;">`;
                        SEChtml += `    <span style="flex-grow: 1; width:30%;">`;
                        SEChtml += `        <input type="radio" value=${item.SEC_SEQ} name="SEC_SEQ"> ${item.SUB_NAME}`;
                        SEChtml += `    </span>`;
                        SEChtml += `    <span style="flex-grow: 1;">`;
                        SEChtml += `        <select class="INSERT_COUNT input_2" disabled>`;
                        for(let i=1; i<=(item.SEC_COUNT - item.SEC_USE); i++) {
                            SEChtml += `<option value=${i}> ${i} 칸 </option>`;
                        }
                        SEChtml += `</select>`;
                        SEChtml += `    </span>`;
                        SEChtml += `</div>`;
                        $("#selectSection").append(SEChtml);
                    }
                })

            });
        }
    document.querySelectorAll('input[name="SEC_SEQ"]').forEach( (e, index) => {
        e.addEventListener('click', e => {
            const aaa = document.querySelectorAll('.INSERT_COUNT');
            aaa.forEach( e => {
                e.disabled = 'disabled'
                e.firstChild.selected = 'selected';
            })
            aaa[index].disabled = '';
        })
    })

    }
    applyBtn.addEventListener('click', getSectionInfo);
};

function blockRegister() {
    if(!document.querySelectorAll('input[name="SEC_SEQ"]')) {
        cmm.confirm("확인", "구역을 선택해주시거나 만차시 다른 시간을 선택해주세요");
        return false;
    }
    if(document.querySelectorAll('input[name="SEC_SEQ"]:checked').length == 0) {
        cmm.confirm("확인", "구역을 선택해주시거나 만차시 다른 시간을 선택해주세요");
        return false;
    }
    if(document.querySelector('textarea').value.length == 0) {
        cmm.confirm("확인", "사유를 작성해주세요");
        return false;
    }
    let params = new FormData(blockFormData);
    const selectIndex = Array.from(document.querySelectorAll('input[name="SEC_SEQ"]')).indexOf( document.querySelector('input[name="SEC_SEQ"]:checked'))
    const selectNodes = document.querySelectorAll('.INSERT_COUNT');
    params.append('INSERT_COUNT', selectNodes[selectIndex].value);

    
    
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if(xhr.readyState==4 && xhr.status==200) {
            let data = JSON.parse(xhr.responseText);
            if(data.code == "S") {
                cmm.alert("저장에 성공했습니다.", function() {
                    location.href = '/parkingBlock/parkingBlock';
                })
            } else {
                cmm.alert("예약이 존재합니다. 다시 확인해주세요");
            }
        }
    }
    xhr.open('post', '/parkingBlock/insertBlock');
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(params);
}

function inputChange(obj) {
	obj.value = obj.value.replaceAll("00", "")
	obj.value = obj.value.replaceAll(":", "시")
}