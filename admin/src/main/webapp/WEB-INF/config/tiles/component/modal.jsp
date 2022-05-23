<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- deleteModal -->
<div class="modalStyle modal fade" id="deleteModal"
	data-bs-backdrop="show" data-bs-keyboard="false" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<h6 class="modal-title" id="deleteModalLabel">
					<i class="bi bi-dash-circle"></i>삭제 확인
				</h6>
				<hr>
				삭제 하시겠습니까?
			</div>
			<div class="modal-footer" style="border: none;">
				<button type="button" class="modalBtn btn btn-secondary"
					style="background-color: #e0e0e0; color: #000;"
					data-bs-dismiss="modal">취소</button>
				<button type="button" class="modalBtn btn btn-danger">삭제</button>
			</div>
		</div>
	</div>
</div>

<!-- BlockreasonModal -->
<div class="modalStyle modal fade" id="blockreasonModal"
	data-bs-backdrop="show" data-bs-keyboard="false" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<h6 class="modal-title" id="reasonModalLabel">
					<i class="bi bi-exclamation-triangle-fill"></i>이용 불가 사유
				</h6>
				<hr>
				주차장 건물 외벽이 무너져 보수 공사 진행 중으로 인해 당분간 이용 불가.
			</div>
			<div class="modal-footer" style="border: none;">
				<button type="button" class="modalBtn btn btn-secondary"
					style="background-color: #e0e0e0; color: #000;"
					data-bs-dismiss="modal">취소</button>
			</div>
		</div>
	</div>
</div>

<!-- costDeleteModal -->
<div class="modalStyle modal fade" id="costDeleteModal"
	data-bs-backdrop="show" data-bs-keyboard="false" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<h6 class="modal-title" id="costDeleteModalLabel">
					<i class="bi bi-dash-circle"></i>비용 삭제
				</h6>
				<hr>
				등록된 비용을 삭제하시겠습니까?
			</div>
			<div class="modal-footer" style="border: none;">
				<button type="button" class="modalBtn btn btn-secondary"
					style="background-color: #e0e0e0; color: #000;"
					data-bs-dismiss="modal">취소</button>
				<button type="button" class="modalBtn btn btn-danger">삭제</button>
			</div>
		</div>
	</div>
</div>

<!-- noticeDeleteModal -->
<div class="modalStyle modal fade" id="noticeDeleteModal"
	data-bs-backdrop="show" data-bs-keyboard="false" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-body">
				<h6 class="modal-title" id="noticeDeleteModalLabel">
					<i class="bi bi-dash-circle"></i>공지사항 삭제
				</h6>
				<hr>
				해당 공지사항을 삭제 하시겠습니까?
			</div>
			<div class="modal-footer" style="border: none;">
				<button type="button" class="modalBtn btn btn-secondary"
					style="background-color: #e0e0e0; color: #000;"
					data-bs-dismiss="modal">취소</button>
				<button type="button" class="modalBtn btn btn-danger">삭제</button>
			</div>
		</div>
	</div>
</div>

<!-- noticeInsertModal -->
<div class="modalStyle modal fade" id="noticeInsertModal"
	data-bs-backdrop="show" data-bs-keyboard="false" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<form action="">
				<div class="modal-body">
					<h6 class="modal-title" id="noticeModalLabel">
						<i class="bi bi-plus-lg"></i>공지사항 등록
					</h6>
					<hr>
					<div class="explain">공지사항을 작성해 주세요.</div>
					<div class="row">
						<div class="col"></div>
						<div class="col-9">
							<div class="row mt-5">
								<div class="col-3">공지사항 제목</div>
								<div class="col">
									<input class="form-control" type="text" name=""
										placeholder="제목을 입력해주세요." value="">
								</div>
							</div>
							<div class="row mt-3 mb-5">
								<div class="col-3">공지사항 내용</div>
								<div class="col fs-1">
									<textarea class="form-control" type="text" name="" rows="8"
										placeholder="공지사항 내용을 입력해주세요."></textarea>
								</div>
							</div>
						</div>
						<div class="col"></div>

					</div>
				</div>
				<div class="modal-footer" style="border: none;">
					<button type="button" class="modalBtn btn btn-secondary"
						style="background-color: #e0e0e0; color: #000;"
						data-bs-dismiss="modal">취소</button>
					<button type="button" class="modalBtn btn btn-primary">등록</button>
				</div>
			</form>
		</div>
	</div>
</div>

<!-- qnaModal -->
<div class="modal fade" id="qnaModal" data-bs-backdrop="static"
	data-bs-keyboard="false" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog modal-lg">
		<div class="modal-content">
			<div class="modal-body">
				<h6 class="modal-title" id="qnaModalLabel">문의 내역</h6>
				<hr>
				<div class="row">
					<div class="col"></div>
					<div class="col-11">
						<div class="row mt-3 pb-1">
							<div class="col title">예약 환불 관련으로 문의드리고자 합니다.</div>
						</div>
						<div class="row mt-3 mb-2">
							<div class="col-3 writerInfo">
								작성자<span class="writerData">김아무개</span><span
									style="margin-left: 25px">|</span>
							</div>
							<div class="col-3 ps-0 writerInfo">
								등록일<span class="writerData">2022.02.25</span><span
									style="margin-left: 18px">|</span>
							</div>
							<div class="col-3 ps-0 writerInfo">
								조회수<span class="writerData">0</span>
							</div>
							<div class="col"></div>
						</div>
						<div class="row mt-1 py-3 contentBox">
							<div class="col content">
								안녕하세요. 예약 환불 관련으로 문의를 드립니다. <br>다름이 아니라 6일 전에 예약 취소를 했는데
								환불이 제대로 정산되지 않은 것 같아서요. <br>다시 한 번 확인 부탁드려요.
							</div>
						</div>
					</div>
					<div class="col"></div>
				</div>
				<div class="row commendBox">
					<div class="col"></div>
					<div class="col-11">
						<div class="row mt-2 commendList">
							<div class="col py-2 commendRootPart">
								<div class="row">
									<div class="col">
										<i class="bi bi-person-circle fs-3"
											style="vertical-align: bottom;"></i><strong class="adminInfo">관리자</strong><span
											class="commendWriteDate">2022.02.26 11:41:21</span>
									</div>
									<div class="col pe-0 commendTag">
										<a href="" class="commendLink">수정</a><span class="separate"
											style="display: inline-block; margin-left: 5px; margin-right: 5px; vertical-align: text-bottom;">|</span><a
											href="" class="commendLink">삭제</a>
									</div>
								</div>
								<div class="row">
									<div class="col commendText">
										안녕하세요. 우주 관리자입니다. <br>확인 후 바로 연락 드리겠습니다.
									</div>
								</div>
							</div>
						</div>
						<!-- 관리자 댓글 달기 -->
						<form action="">
							<div class="row mt-4 py-2">
								<div class="col content">
									<i class="bi bi-pencil-fill"></i>답변달기
								</div>
							</div>
							<div class="row writeBox">
								<div class="col p-0">
									<textarea class="form-control" type="text" name="" rows="3"
										placeholder="답변을 입력해주세요."></textarea>
								</div>
								<div class="col-2"
									style="align-self: center; text-align-last: end;">
									<button type="button" class="commendBtn">등록</button>
								</div>
							</div>
						</form>
					</div>
					<div class="col"></div>
				</div>
			</div>
			<div class="modal-footer" style="border: none;">
				<button type="button" class="modalBtn btn btn-secondary"
					style="background-color: #e0e0e0; color: #000;"
					data-bs-dismiss="modal">취소</button>
			</div>
		</div>
	</div>
</div>