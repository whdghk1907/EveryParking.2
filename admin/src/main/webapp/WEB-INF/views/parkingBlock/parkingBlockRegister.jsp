<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 차단 시간 등록 </h1>
            <span> 주차장 관리 > 차단 시간 설정 > 차단 시간 등록 </span>
          </div>

        </div>
        <!-- // top -->
        <form id="blockFormData" name="blockFormData" method="post">
        <!-- mainCon -->
        <div class="mainCon">

          <!-- mainConWrap -->
          <div class="mainConWrap">

            <!-- imgWrap -->
            <div class="imgWrap">
              <img src="/img/parkingLot.svg">
            </div>
            <!-- // imgWrap -->

            <!-- step -->
            <div class="step">
              <section class="stepTitle">
                <h2> 주차장 이용 불가 시간을 설정해주세요. </h2>
              </section>
              <section class="stepConWrap">
                
                <!-- tableWrap_3 -->
                <div class="tableWrap_3 full-table">

                  <!-- table -->
                  <table class="table">
                    <colgroup>
                      <col style="width:25%;">
                      <col style="width:75%;">
                    </colgroup>
                    <tr>
                      <th> 주차장 선택 </th>
                      <td>
                        <!-- dropDownBox02 -->
                          <select class="inputPlusSelectBox input_2" required>
                            <c:forEach items="${list}" var="data">
			                                    <option value="${data.PARK_SEQ}">${data.PARK_NAME}</option>
			                        </c:forEach>
                          </select>
                        <!-- // dropDownBox02 -->
                      </td>
                    </tr>
                    <tr>
                      <th> 기간 선택 </th>
                      <td class="calendarWrap">
                        <input name="daterange" class="datepicker" id="datepickerR" type="text" onchange="inputChange(this)">
                        <span class="calendar"></span>
                      </td>
                    </tr>
                    <tr>
                      <th> 구역 설정 </th>
                      <td id="selectSection">
                        주차장을 선택 후 시간을 설정해주세요
                      </td>
                    </tr>
                    <tr>
                      <th> 사유 작성 </th>
                      <td class="textareaWrap">
                        <textarea rows="12" placeholder="차단 사유를 작성해주세요." name="BLO_CONT" id="BLO_CONT"></textarea>
                      </td>
                    </tr>
                  </table>
                  <!-- // table -->

                </div>
                <!-- // tableWrap_3 -->

              </section>

              <!-- rightBottomBtn -->
              <div class="rightBottomBtn">
                <button type="button" onclick="history.back();"> 이전 단계 </button>
                <button type="button" onclick="blockRegister()"> 등록하기 </button>
              </div>
              <!-- // rightBottomBtn -->
              
            </div>
            <!-- // step -->

          </div>
          <!-- // mainConWrap -->

        </div>
        <!-- // mainCon -->
      </form>
      </div>
<script src="/js/parkingBlock/parkingBlockRegi.js"></script>