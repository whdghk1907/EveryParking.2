<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>

					<div class="modal fade" id="replyModal`+ data[i].QNAC_SEQ +`" tabindex="-1" aria-labelledby="replyModalLabel" aria-hidden="true">
					  <div class="modal-dialog">
					    <div class="modal-content">
					      <div class="modal-header">
					        <h5 class="modal-title" id="replyModalLabel">답글 입력</h5>
					        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					      </div>
					      <form action="/qnaManage/insertReply" method="post" onsubmit="insertReply(`+ data[i].QNAC_SEQ +`)">
					      <div class="modal-body">
				            <div class="row mb-3" style="padding-left: 12px;">
				               <div class="input-group">
								  <input type="hidden" name="QNA_SEQ" value="`+ data[i].QNA_SEQ +`">
				                  <input type="hidden" name="GQNA_NUM" value="`+ data[i].QNAC_SEQ +`">
				                  <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
				                  <textarea name="QNAC_CONT" id="replyCont `+ data[i].QNAC_SEQ +`" rows="3" class="form-control" style="border-right: none; resize: none;"></textarea>
				               </div>                
				            </div>            
					      </div>
					      <div class="modal-footer">
					        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
					        <button type="submit" class="btn btn-primary">작성 완료</button>
					      </div>
					      </form>
					    </div>
					  </div>
					</div>			<td ${col.align? "style= \"text-align:"+col.align+"\"":""}></td>
					
					
								<div class="popWrap02">
									<div class="popBg">
										<span class="blind"></span>
									</div>
									<form action="/qnaManage/insertReply" method="post" onsubmit="insertReply(`+ data[i].QNAC_SEQ +`)">									
									<div class="delPopup02">
										<div class="popTitle">
											<img src="/img/popup.svg">
											<h3>답글 달기</h3>
										</div>
										<div class="modalInfo">
											<input type="hidden" name="QNA_SEQ" value="`+ data[i].QNA_SEQ +`">
							                <input type="hidden" name="GQNA_NUM" value="`+ data[i].QNAC_SEQ +`">
							                <input type="hidden" name="QNAC_SEQ" value="`+ data[i].QNAC_SEQ +`">
									        <textarea name="QNAC_CONT" id="replyCont`+data[i].QNAC_SEQ+`" rows="10"></textarea>
									    </div>
									    <div class="popBtn">
									        <button type="submit" class="delBtn">수정</button>
									        <button id="O" type="button" class="delBtn">취소</button>
									    </div>
									</div>
									</form>
								</div>
										
				

</body>
</html>