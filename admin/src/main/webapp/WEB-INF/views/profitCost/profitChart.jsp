<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="col mx-3">
	<!-- 실질적 내용 변경 구역-->
	<div class="row">
		<!-- top title-->
		<div class="col text-start p-0">
			<h1 style="font-weight: bold;">
				순 수익 조회<span class="fs-6 fw-light"> 주차장 수익을 확인할 수 있습니다</span>
			</h1>
		</div>
		<div class="col-2 mt-4 px-0 text-end">
			<a href="./costInsertForm" class="btn btn-light btn-sm adminBorder borderBottom" data-bs-toggle="modal" data-bs-target="#costModalinsert">비용 등록</a>
		</div>
	</div>
	<form id="dateAndSeq">
		<div class="row mt-4 ">
			<!-- 검색 옵션 구역-->
			<div class="col-2 px-0">                                                          
				<select id="parkSeqBox" name="PARK_SEQ" class="form-select" aria-label="Default select example" onchange="selectParkSeq()">
					<option value="" selected>주차장 선택</option>
					<c:forEach items="${list}" var="data">
						<option value="${data.PARK_SEQ}">${data.PARK_NAME}</option>
					</c:forEach>
				</select>
			</div>
			<div class="col-2 px-0 ms-3">
				<select id="searchYearBox" name="SEARCHYEAR" onchange="selectParkSeq()" class="form-select" aria-label="Default select example" style="text-align:left;">
					<option value="" selected>연도 선택</option>
					<c:forEach items="${yearList }" var="year">
						<option value="${year.yearData }">${year.yearData }년</option>
					</c:forEach>
				</select>
			</div>
			<div class="col px-0" style="font-size: 20px;text-align-last: end;">
				<div class="btn-group" role="group">
					<a href="./profitChart" class="bi bi-bar-chart-line btn btn-secondary active" aria-current="page"></a><a href="./profitTable" class="bi bi-list-ul btn btn-secondary"></a>
				</div>
			</div>
		</div>
	</form>
	<div class="row mt-2 adminBorder borderBottom">
		<!-- 테이블 구역 -->
		<div class="col px-0" style="background-color: white;width:100%;">
			<!-- Chart API 가져올 구역-->
			<canvas class="profitChart" id="profitChart" width="917.69" height="400"></canvas>
		</div>
	</div>
</div>
<script type="text/javascript" src="/js/profitCost/profitChart.js"></script>