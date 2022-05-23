<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="col mx-3">

	<!--Top title-->
	<div class="row">
		<div class="col px-0 text-start">
			<h1 style="font-size: 40px; font-weight: bold;">
				차단 시간 설정<span class="fs-6 fw-light"> 사용자의 예약을 차단할 시간을 설정해주세요</span>
			</h1>
		</div>



		<div class="col-2 mt-4 px-0 text-end">
			<form action="">
				<button type="button"
					class="btn btn-light btn-sm adminBorder borderBottom">사용
					시간 설정</button>
			</form>
		</div>
	</div>

	<!-- 내용 -->
	<div
		class="row mt-4 mb-3 backgroundColorwhite adminBorder borderBottom"
		style="height: 600px;">
		<div class="col">

			<div class="row">
				<div class="col ms-5 mt-5 mb-4">
					<h4 style="font-weight: bold;">주차장 이용 불가 시간을 설정해주세요</h4>
				</div>
			</div>

			<div class="row mt-3">
				<div class="col-4 px-0">
					<img class="img-fluid" src="/img/image1.png">
				</div>

				<div class="col ms-1">
					<div class="row me-3">
						<div class="col-4 mt-1">주차장 선택</div>
						<div class="col">
							<select class="form-select inputPlusSelectBox" aria-label="주차장명">
								<option selected>클릭하면 아래 창에서 선택</option>
								<option value="parkingLot_name">a주차장</option>
								<option value="parkingLot_name">b주차장</option>
								<option value="parkingLot_name">c주차장</option>
							</select>
						</div>
					</div>
					<div class="row me-3 mt-3">
						<div class="col-4 mt-1">차단 시간</div>
						<div class="col">
							<input type="text" name="daterange" class="datepicker"
								style="width: 100%; height: 35px; padding-left: 10px;" />
						</div>
					</div>
					<div class="row me-3 mt-3">
						<div class="col-4 mt-1">주차장 구역 선택</div>
						<div class="col">
							<select class="form-select inputPlusSelectBox" aria-label="주차장구역">
								<option selected>클릭하면 아래 창에서 선택</option>
								<option value="category_name">여성전용</option>
								<option value="category_name">전기차</option>
								<option value="category_name">일반</option>
							</select>
						</div>
					</div>
					<div class="row me-3 mt-3">
						<div class="col-4 mt-1">구역 개수 설정</div>
						<div class="col">
							<input type="number" name="section_count" min="1" max="20">
						</div>
					</div>
					<div class="row me-3 mt-3">
						<div class="col-4 mt-1">사유 작성</div>
						<div class="col">
							<form action="">
								<textarea rows="5" cols="50" class="inputPlusSelectBox"
									style="width: 100%; height: 150px; border-radius: 0.25rem; border: 1px solid #ced4ce">나무가 쓰러져서 공사기간동안 차단합니다.</textarea>
							</form>
						</div>
					</div>

					<div class="row pt-2 me-3 mt-4">
						<div class="col"></div>
						<div class="col-10 text-end d-gird">
							<form action="">
								<button type="button" class="btn btn-outline-primary">수정완료</button>
							</form>
						</div>
					</div>

				</div>
			</div>


		</div>
	</div>



</div>