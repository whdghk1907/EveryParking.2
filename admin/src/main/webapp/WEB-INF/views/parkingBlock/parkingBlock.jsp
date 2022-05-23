<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 차단 시간 설정 </h1>
            <span> 주차장 관리 > 차단 시간 설정 </span>
          </div>

          <!-- topBtn -->
          <button class="topBtn">
            <a href="/parkingBlock/parkingBlockRegister"> 차단 시간 등록 </a>
          </button>
           <!-- // topBtn -->

        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- mainConWrap02 -->
          <div class="mainConWrap02">

            <!-- dropDownBox -->
            <form class="dropDownBox01">
              <select onchange="searchGrid('#parkingBlock', this.value)">
                <option value=" " selected> 전체 </option>
					<c:forEach items="${list}" var="data">
						<option value="${data.PARK_NAME}">${data.PARK_NAME}</option>
					</c:forEach>
              </select>
            </form>
            <!-- // dropDownBox -->

            <!-- tableWrap -->
            <div class="tableWrap">

              <!-- table -->
              <table class="table" id="parkingBlock">
              </table>
              <!-- // table -->
			  
            </div>
            <!-- // tableWrap -->
            <div id="pagingBlock2" class="page"></div>
            <div class="rightBottomBtn" style="margin: 0px;">
          	
          	<button type="button" onclick="excelDown('#parkingBlock', '/excel/parkingBlock')"> 엑셀 다운로드 </button>
          	</div>
          </div>
          <!-- // mainConWrap02 -->

        <!-- // mainCon -->
        
      </div>
<!-- // content -->

    </div>
<script src="/js/parkingBlock/parkingBlock.js"></script>