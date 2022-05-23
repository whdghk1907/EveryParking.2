<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<div class="col mx-3">
	<!--Top title-->
	<div class="row">
		<div class="col px-0 text-start">
			<h1 style="font-size: 40px; font-weight: bold;">
				공지사항 등록<span class="fs-6 fw-light"> 공지사항을 등록할 수 있습니다.</span>
			</h1>
		</div>

		<div class="col-2 mt-3 text-end">
			<form action="">
				<button type="button"
					class="btn btn-light btn-sm adminBorder borderBottom"
					data-bs-toggle="modal" data-bs-target="#costModalinsert">
					새로 등록</button>
			</form>
		</div>
	</div>
	<!-- 테이블 -->
	<form id="noticeDetail">
		<div
			class="row mt-2 mb-3 backgroundColorwhite adminBorder borderBottom"
			style="min-height: 600px;">
			<div class="col">
				<div class="row">
					<div class="col"></div>
					<div class="col-9">
						<div class="row mt-5">
						<input type="hidden" name="NOTI_SEQ" value="${noti.NOTI_SEQ}">
							<div class="col-3">공지사항 제목</div>
							<div class="col">
								<input class="form-control" type="text" name="notiTitle" value="${noti.NOTI_TITLE}">
							</div>
						</div>
						<div class="row mt-3 mb-5">
							<div class="col-3">공지사항 내용</div>
						</div>
						<div class="row">
							<div class="col">
								<textarea id="writeEditor" style="display: none;"> ${noti.NOTI_CONT}</textarea>
							</div>
						</div>
						<div class="row my-3">
							<div class="col text-end">
								<button type="button" class="modalBtn btn btn-secondary"
									style="background-color: #e0e0e0; color: #000;" onclick="history.back();">취소</button>
								<button type="button" class="modalBtn btn btn-primary" onclick="updateData()">등록</button>
							</div>
						</div>
					</div>
					<div class="col"></div>
				</div>
	
			</div>
		</div>
	</form>
</div>
<script type="text/javascript" src="/js/noticeManagement/noticeManagement.js"></script>

