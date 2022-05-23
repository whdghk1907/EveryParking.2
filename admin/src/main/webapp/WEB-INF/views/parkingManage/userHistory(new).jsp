<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 순 수익 조회 </h1>
            <span> 주차장 관리 > 순 수익 조회 </span>
          </div>

          <!-- topBtn -->
          <button class="topBtn">
            <a href=""> 비용 등록 </a>
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
                  <select>
                    <option value="none"> 전체 </option>
                    <option value="none"> 전체 </option>
                    <option value="none"> 전체 </option>
                    <option value="none"> 전체 </option>
                  </select>
                </form>
                <!-- // dropDownBox01 -->

                <!-- calenderWrap -->
                <div class="calendarWrap">
                  <input name="dates" class="datepicker02" type="text">
                  <span class="calendar"></span> 
                </div>
                <button class="calendarSearch" type="submit"> 검색 </button>
                <!-- // calenderWrap --> 

              </div>
              <!-- // dropDownBoxWrap -->

            </div>
            <!-- mainConTopWrap -->
            
            <!-- tableWrap -->
            <div class="tableWrap">

              <!-- table -->
              <table class="table">
                <colgroup>
                  <col style="width:3.5%;">
                  <col style="width:15%;">
                  <col style="width:15%;">
                  <col style="width:45%;">
                  <col style="width:15%;">
                  <col style="width:6.5%;">
                </colgroup>
                <thead>
                  <tr>
                    <th> # </th>
                    <th> 주차장 명 </th>
                    <th> 구분 </th>
                    <th> 금액 </th>
                    <th> 발생일 </th>
                    <th> 비고 </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> 중앙 주차장 </td>
                    <td> 00가 0000 </td>
                    <td> 2,000원 </td>
                    <td> 2022-04-01 </td>
                    <td class="blank"> - </td>
                  </tr>
                  <tr>
                    <td> 2 </td>
                    <td> 중앙 주차장 </td>
                    <td> 11나 1111 </td>
                    <td> 2,000원 </td>
                    <td> 2022-04-02 </td>
                    <td class="blank"> - </td>
                  </tr>
                  <tr>
                    <td> 3 </td>
                    <td> 레몬 주차장 </td>
                    <td> 22가 2222 </td>
                    <td> 2,000원 </td>
                    <td> 2022-04-02 </td>
                    <td class="blank"> - </td>
                  </tr>
                </tbody>
              </table>
              <!-- // table -->

            </div>
            <!-- // tableWrap -->

          </div>
          <!-- // main -->

          <!-- rightBottomBtn -->
          <div class="rightBottomBtn">
            <button type="button"> 엑셀 다운로드 </button>
          </div>
          <!-- // rightBottomBtn -->          

        </div>
        <!-- // mainCon -->
        
      </div>
<script src="/js/parkingManage/userHistory.js"></script>