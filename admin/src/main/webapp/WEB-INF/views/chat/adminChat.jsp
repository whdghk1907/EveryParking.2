<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!-- CSS only -->
<div class="content">
	<!-- 실질적 내용 변경 구역-->
	
     <!-- top -->
    <div class="top">
      <div class="title">
        <h1> 실시간 문의 </h1>
        <span> 고객센터 관리 > 1:1 문의  </span>
      </div>
	</div>
       <!-- mainCon -->
      <div class="mainCon">

        <!-- mainConWrap -->
        <div class="mainConWrap">
			<div class="col px-0">
	   			<div class="row px-2" id="chatContentBox">
	   				<div class="col" id="appendBox">
	   				</div>
	   			</div> 
	   			<div class="row" style="margin:auto;padding-top:20px;">
	   				<div class="col-3 my-2 dropDownBox01" style="align-self: center">
	   					<select id="reciverInput" name="CHAT_RECIV" class="form-select" aria-label="Default select example" style="line-height:20px">
	   					<option value="">유저 선택</option>
	   					<c:forEach items="${data.chatMemberList }" var="list">
						  <option value="${list.USER_SEQ}">${list.USER_MAIL }</option>
						 </c:forEach>
						</select>
	   				</div>
	   				<div class="col my-2"></div>
	   				<div class="col-1">
	   					<div class="row py-3">
	   						<div class="col-8"></div>
	   						<div class="col py-2">
	   							<div class="unlock" id="lockIcon" onclick="changeLock();"></div>
	   						</div>
	   					</div>
	   				</div>
	   			</div>
	   			<div id="chatCommentBox" class="row">
	   					<textarea id="commentInput" class="form-control sendBox" name="CHAT_CONT" rows="1" placeholder="답변할 내용을 입력해주세요." style="line-height:30px; flex-grow: 1; font-size:medium; margin-right: 10px;padding:0.8rem;border-radius:0.3rem;"></textarea>
	   					<button type="button" class="topBtn btn-warning" onclick="writeCommentProcess()">보내기</button>
	   			</div>
			</div>
		</div>
	</div>
</div>
<script src="/js/chat/adminChat.js"></script>