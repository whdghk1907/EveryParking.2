<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
      <div class="content">
        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 주차장 홈 </h1>
            <span> 주차장 관리 > 주차장 홈 </span>
          </div>

          <!-- topBtn -->
          <button class="topBtn">
            <a href="/parkingManage/parkingRegister"> 주차장 등록 </a>
          </button>
           <!-- // topBtn -->

        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- tableWrap -->
          <div class="tableWrap">

            <!-- table -->
            <table class="table" id="parkingZoneTable">
            </table>
            <!-- // table -->

          </div>
          <!-- // tableWrap -->
			<div id="pagingBlock2" class="page"></div>
        <!-- // mainCon -->
        
      </div>
<!-- // content -->

    </div>
<script type="text/javascript" src="/js/parkingManage/parkingZone.js"></script>