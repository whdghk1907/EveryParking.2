<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 이용 내역 조회 </h1>
            <span> 주차장 관리 > 이용 내역 조회 </span>
          </div>

          <!-- topBtn -->
          <button class="topBtn">
            <a href="../profitCost/profitTable"> 내역 조회 </a>
          </button>
           <!-- // topBtn -->

        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- main -->
          <div class="main">
            
            <!-- mainCon-TopWrap -->
            <div class="mainCon-TopWrap">

              <!-- dropDownBoxWrap -->
              <div class="dropDownBoxWrap">

                <!-- dropDownBox01 -->
                <form class="dropDownBox01">
                  <select onchange="searchGrid('#profitTable', this.value)">
					<option selected>전체</option>
					<c:forEach items="${list}" var="data">
						<option value="${data.PARK_SEQ}">${data.PARK_NAME}</option>
					</c:forEach>
					<!-- 예약 기간 검색 변수 아마 따로 계산 값으로? -->
				</select>
                </form>
                <!-- // dropDownBox01 -->

                <!-- calenderWrap -->
                <div class="calendarWrap">
                  <input name="daterange" class="datepicker02" type="text" id='datepickerN'>
                  <span class="calendar"></span> 
                </div>
                <button class="calendarSearch" type="submit" onclick="searchDate();"> 검색 </button>
                <!-- // calenderWrap --> 

              </div>
              <!-- // dropDownBoxWrap -->

            </div>
            <!-- mainConTopWrap -->
            
            <!-- tableWrap -->
            <div class="tableWrap">

              <!-- table -->
              <table class="table" id="userHistory">
                <colgroup>
                  <col style="width:3.5%;">
                  <col style="width:15%;">
                  <col style="width:15%;">
                  <col style="width:45%;">
                  <col style="width:15%;">
                  <col style="width:6.5%;">
                </colgroup>
                
              </table>
              <!-- // table -->

            </div>
            <!-- // tableWrap -->
            <div id="pagingBlock2" class="page"></div>

          </div>
          <!-- // main -->

          <!-- rightBottomBtn -->
          <div class="rightBottomBtn">
            <button type="button" onclick="excelDown('#userHistory', '/excel/userHistory')"> 엑셀 다운로드 </button>
          </div>
          <!-- // rightBottomBtn -->          

        </div>
        <!-- // mainCon -->
        
      </div>
<script src="/js/parkingManage/userHistory.js"></script>