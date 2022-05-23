<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 실질적 내용 변경 구역-->
<div class="content">

          <!-- top -->
          <div class="top">


            <!-- topCircle -->
            <section class="topCircle">
              <h1 class="blind"> 이용 현황 </h1>
              <div class="circle">
                <span> 금일 이용 현황 </span>
                 <p id="today">  </p>
               </div>
               <div class="circle">
                <span> 어제 이용 현황 </span>
                 <p id="yesterday">  </p>
              </div>
              <div class="circle accent">
                <span> 누적 이용 현황 </span>
                <p id="totalday">  </p>
              </div>
            </section>
            <!-- // topCircle -->

            <!-- topBtn -->
            <button class="topBtn">
               <a href="/parkingManage/userHistory"> 이용 내역 조회 </a>
            </button>
            <!-- // topBtn -->
            

          </div>
          <!-- // top -->
          

          <!-- api -->
          <div class="api01">
            <form id="dateAndSeq"></form>
			<canvas class="profitChart" id="profitChart" width="1290" height="363"></canvas>
          </div>
          <!-- // api -->


          <!-- ask & notice -->
          <section class="askNotice">

            <div class="askNot">
              <div class="askNotTlt">
                <h2> 최근 문의 내역 </h2>
                <a href="/qnaManage/qnaManage"><img src="../img/more.svg"></a>
              </div>
              <ul id="noti">

              </ul>
            </div>
            <div class="askNot">
              <div class="askNotTlt">
                <h2> 최근 공지사항 </h2>
                <a href="/noticeManagement/noticeManagement"><img src="../img/more.svg"></a>
              </div>
              <ul id="qna">

              </ul>
            </div>

          </section>
          <!-- // ask & notice -->


        </div>
<script src="/js/main/main.js"></script>
<script src="/js/profitCost/profitChart.js"></script>
