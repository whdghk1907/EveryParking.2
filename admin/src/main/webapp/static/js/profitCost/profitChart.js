
let barChart;
var dateAndSeq = document.getElementById("dateAndSeq"); // jsp의 form 태그 id

function selectParkSeq(){
	let params = new FormData(dateAndSeq);  // params -> PARK_SEQ, yearData가 담겨있음
	
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){ 
		if(xhr.readyState == 4 && xhr.status == 200){ 
		   var data = JSON.parse(xhr.responseText);
		   // 응답 받은 후 실행할 문
		   // 응답 받으면 차트 실행
			drawChart(data.data) 
		}
	};
	
	xhr.open("post", "/profitCost/selectReserChartDataByParkSeq", true);
	//xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded"); -> FormData 객체 사용으로 주석 처리
	xhr.send(params);
}



function drawChart(data){
	let profitChart = document.getElementById('profitChart').getContext('2d');
	var resultLabels = []; // 차트 x축 이름 (월)
	var profitValue = []; // 차트 데이터 담을 예약수익비용 변수 선언
	var costValue = []; // 차트 데이터 담을 관리비용 변수 선언
	var netprofitValue = []; // 차트 데이터 담을 순수익 변수 선언

	   var costList = data.costList;
	   var reserList = data.reserList;
	   
	reserList.forEach((item, index)=>{
		resultLabels.push(`${item.monthly}월`);
		profitValue.push(item.reseTotalPrice);
		costValue.push(costList[index].costtotalprice);
		netprofitValue.push(item.reseTotalPrice - costList[index].costtotalprice);
	})
	
	if(barChart)
		barChart.destroy();
		barChart = new Chart(profitChart, {
		type : 'line',
		data : {labels : resultLabels,
				datasets : [
					{
						label : '수익', 
						data : profitValue,
						borderColor: 'rgb(244 87 87)',
						backgroundColor: 'rgb(244 87 87)'
					},
			   		{
						label : '관리비용',
						data : costValue,
						borderColor: 'rgb(55 134 212)',
						backgroundColor: 'rgb(55 134 212)'
						
					},
			   		{
						label : '순수익', 
						data : netprofitValue,
						borderColor: 'rgb(246 202 95)',
						backgroundColor: 'rgb(246 202 95)'
					}]
				}
	    }
	)
}


window.addEventListener("DOMContentLoaded", function(){
	// 여기가 실행 시점, 문서 로드 후 사실상 시작 시점
	selectParkSeq();
	
}); 