<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="col mx-3">
	<!--Top title-->
	<div class="row">
		<div class="col px-0 text-start">
			<h1 style="font-size: 40px; font-weight: bold;">
				쿠폰 등록<span class="fs-6 fw-light"> 쿠폰을 등록할 수 있습니다.</span>
			</h1>
		</div>     
	</div>
	<!-- 테이블 -->
	<form action="/couponManagement/insertCoupon" method="post" enctype="multipart/form-data" id="cou">
		<div class="row mt-2 mb-3 backgroundColorwhite adminBorder borderBottom" style="min-height: 600px;">
			<div class="col">
				<div class="row">
					<div class="col"></div>
					
					<div class="col-9">
						<div class="row mt-5">
							<div class="col-3">쿠폰명</div>
							<div class="col">
								<input class="form-control" type="text" id="inputCouName" name="COU_NAME" placeholder="쿠폰명을 입력해주세요.">
							</div>
						</div>
						
						<div class="row mt-5">
							<div class="col-3">쿠폰 이미지</div>
							<div class="col">
								<div class="row">
									<div class="col">
										<img id="thumbNail" style="height: 100px; width: auto;" class="img-fluid">
									</div>
								</div>
								<div class="row mt-2">
									<div class="col">
										<input type="file" name="FILE_SEQ" id="inputThumbnail" style="width: 100%" placeholder="이미지를 넣어주세요.">
									</div>
								</div>
							</div>
						</div>
					
					
						<div class="row mt-5">
							<div class="col-3">쿠폰 가격</div>
							<div class="col">
								<input class="form-control" type="text" id="inputCouPrice" name="COU_PRICE" placeholder="쿠폰가격을 입력해주세요." onkeypress="onlyNum();">
							</div>
						</div>
						
						<div class="row mt-5">
							<div class="col-3">쿠폰 발행수</div>
							<div class="col">
								<input class="form-control" type="text" id="inputCouCount" name="COU_COUNT" placeholder="발행수를 입력해주세요." onkeypress="onlyNum();">
							</div>
						</div>
						
						
						<div class="row my-3">
							<div class="col text-end">
								<button type="button" class="btn btn-danger" onclick="location.href='/couponManagement/couponManagement'">취소</button>
								<button type="submit" class="btn btn-primary" id="couponBtn">쿠폰 등록</button>
							</div>
						</div>
					</div>
					
					<div class="col"></div>
				</div>
	
			</div>
		</div>
	</form>
</div>
<script type="text/javascript" src="/js/couponManagement/couponInsertForm.js"></script>

