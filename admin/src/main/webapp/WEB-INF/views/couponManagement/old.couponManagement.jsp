<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="col mx-3">
	<!-- 실질적 내용 변경 구역-->
	<div class="row">
		<!-- top title-->
		<div class="col text-start p-0">
			<h1 style="font-weight: bold;">쿠폰 관리</h1>
		</div>
		<div class="col-6 mt-4">
			<p style="vertical-align: text-bottom;"></p>
		</div>
		<div class="col-2 mt-4 px-0 text-end">
			<button class="btn btn-light btn-sm adminBorder borderBottom" onclick="location.href='/couponManagement/couponInsertForm'">쿠폰등록</button>
		</div>
	</div>
	<div class="row mt-4 adminBorder borderBottom" style = "background-color: white; position:relative; height: 600px">
		<!-- 테이블 구역 -->
		<div class="col px-0">
			<table class="table table-bordered text-center mb-0" id="couponManageTable"></table>
		</div>
	   <div id="pagingBlock3" style="display: flex; justify-content: center; position: absolute; bottom: 1%;"></div>
	</div>
</div>
<!-- <script type="text/javascript" src="/js/couponManagement/couponManagement.js"></script>  -->