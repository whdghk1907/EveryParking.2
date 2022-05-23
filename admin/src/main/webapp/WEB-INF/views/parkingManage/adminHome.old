<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- 실질적 내용 변경 구역-->
<div class="col mx-3">
	<div class="row mb-3">
		<div class="col-xl-10 col-lg-10 text-end">
		</div>
		<div class="col-xl-2 col-lg-2">
			<a type="button" class="btn card" href="/parkingManage/userHistory">이용 내역 조회</a>
		</div>
	</div>
	<div class="row">
		<div class="col-xl-3 col-lg-4">
			<div class="card tilebox-one  mb-3">
				<div class="card-body">
					<i class='uil uil-window-restore float-end'></i>
					<h6 class="text-uppercase mt-0">금일 이용 현황</h6>
					<h2 class="my-2" id="today">121</h2>
					<p class="mb-0 text-muted">
						<span class="me-2" id="flucToday">1.08%</span>
						<span class="text-nowrap">Since previous yesterday</span>
					</p>
				</div> <!-- end card-body-->
			</div>
			<!--end card-->

			<div class="card tilebox-one  mb-3">
				<div class="card-body">
					<i class='uil uil-window-restore float-end'></i>
					<h6 class="text-uppercase mt-0">어제 이용 현황</h6>
					<h2 class="my-2"  id="yesterday">560</h2>
				</div> <!-- end card-body-->
			</div>
			<!--end card-->

			<div class="card tilebox-one  mb-3">
				<div class="card-body">
					<i class='uil uil-window-restore float-end'></i>
					<h6 class="text-uppercase mt-0">누적 이용 현황</h6>
					<h2 class="my-2" id="totalday">560</h2>
					<p class="mb-0 text-muted">
						<span class="me-2" id="flucWeek">1.08%</span>
						<span class="text-nowrap">Since previous month</span>
					</p>
				</div> <!-- end card-body-->
			</div>
			<!--end card-->
		</div> <!-- end col -->
		<!-- 차트 들어가는 공간 -->

		<div class="col-xl-9 col-lg-8" style="height: 100%;">
			<div class="card" style="height: 100%;">
				<div class="card-body" style="height: 100%;">
					<form id="dateAndSeq"></form>
					<canvas class="profitChart" id="profitChart" width="917.69" height="280"></canvas>
				</div> <!-- end card-body-->
			</div> <!-- end card-->
		</div>
	</div>

	<div class="row ">
		<!--최근 문의 내역-->
		<div class="col-xl-6 col-lg-6 p-3">
			<div class="card tilebox-one">
				<div class="card-body" id="qna" style="min-height: 300px;">
					<a href="/qnaManage/qnaManage"><i class='bi bi-plus-lg fs-2 float-end'></i></a>
					<h6 class="text-uppercase mb-4">최근 문의 내역</h6>
				</div> <!-- end card-body-->
			</div>
		</div>

		<!--최근 공지 사항-->
		<div class="col-xl-6 col-lg-6 p-3">
			<div class="card tilebox-one">
				<div class="card-body" id="noti" style="min-height: 300px;">
					<a href="/noticeManagement/noticeManagement"><i class='bi bi-plus-lg fs-2 float-end'></i></a>
					<h6 class="text-uppercase mb-4">최근 공지 사항</h6>
				</div> <!-- end card-body-->
			</div>
		</div>
	</div>
</div>
<script src="/js/main/main.js"></script>
<script src="/js/profitCost/profitChart.js"></script>
