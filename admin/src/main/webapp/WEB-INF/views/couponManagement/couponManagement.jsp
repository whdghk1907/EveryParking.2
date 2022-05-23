<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 쿠폰 관리 </h1>
            <span> 고객센터 관리 > 쿠폰 관리 </span>
          </div>

          <!-- topBtn -->
          <button class="topBtn">
            <a href="/couponManagement/couponInsertForm"> 쿠폰 등록 </a>
          </button>
           <!-- // topBtn -->

        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- mainConWrap02 -->
          <div class="mainConWrap02">

            <!-- tableWrap -->
            <div class="tableWrap">

              <!-- table -->
              <table class="table" id="couponManagement">
              </table>
              <!-- // table -->
			  
            </div>
            <!-- // tableWrap -->
          	<div id="pagingBlock2" class="page"></div>
          </div>
          <!-- // mainConWrap02 -->

        <!-- // mainCon -->
        
      </div>
<!-- // content -->

    </div>
<script src="/js/couponManagement/couponManagement.js"></script>