<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 순 수익 조회 </h1>
            <span> 주차장 관리 > 순 수익 조회 </span>
          </div>

          <!-- topBtn -->
          <button class="topBtn">
            <a href="/profitCost/costInsertForm"> 비용 등록 </a>
          </button>
           <!-- // topBtn -->

        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">


          <!-- mainCon-TopWrap -->
          <div class="mainCon-TopWrap">

            <!-- dropDownBoxWrap -->
            <div class="dropDownBoxWrap">

              <!-- dropDownBox01 -->
              <form class="dropDownBox01" id="dateAndSeq" style="display:flex; flex-direction:row;">
                <select id="parkSeqBox" name="PARK_SEQ" class="form-select" aria-label="Default select example" onchange="selectParkSeq()">
					<option value="" selected>주차장 선택</option>
					<c:forEach items="${list}" var="data">
						<option value="${data.PARK_SEQ}">${data.PARK_NAME}</option>
					</c:forEach>
				</select>
              <!-- // dropDownBox01 -->

              <!-- calenderWrap -->
              <div class="dropDownBox01" style="margin-left:10px;">
                  <select id="searchYearBox" name="SEARCHYEAR" onchange="selectParkSeq()">
					<option value="" selected>연도 선택</option>
					<c:forEach items="${yearList }" var="year">
						<option value="${year.yearData }">${year.yearData }년</option>
					</c:forEach>
				</select>
              </div>
			</form>
              <!-- // calenderWrap --> 

            </div>
            <!-- // dropDownBoxWrap -->

            <!-- mainCon-TopBtnWrap -->
            <div class="mainCon-TopBtnWrap">
              <ul>
                <li class="listIcon" onclick="location.href='/profitCost/profitTable'"></li>
                <li class="chartIcon act" onclick="location.href='/profitCost/profitChart'"></li>
              </ul>
            </div>
            <!-- mainCon-TopBtnWrap -->

          </div>
          <!-- mainConTopWrap -->
          
          <!-- api -->
          <div class="api02">
          	<canvas class="profitChart" id="profitChart" width="917.69" height="400"></canvas>
          </div>
          <!-- // api --> 

        </div>
        <!-- // mainCon -->

      </div>
<script type="text/javascript" src="/js/profitCost/profitChart.js"></script>