<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>  
<div class="col mx-3"><!-- 실질적 내용 변경 구역-->
		<div class="row mt-3">
		<!-- top title-->
			<div class="col px-0 text-start">
				<h2 style="font-weight: bold;">문의내역 관리</h2>
			</div>
		</div>
		<div class="row">
			<div class="col px-0 text-start" style="margin: 0;">
				<span class="fs-7 fw-light">고객 센터 > 문의 내역</span>
			</div>
		</div>			
			    <!-- 흰 내용 부분 -->
	    <div class="row mt-4 backgroundColorwhite rounded shadow-sm">
	        <div class="col mx-3">
	            <div class="row mt-4">
	                <div class="col">
	                    <h4 style="font-weight: bold;">${qna.QNA_TITLE}</h4>
	                </div>
	            </div>
	            <div class="row my-4">
	                <div class="col">
	                    <span style="font-weight: bold;">작성자 </span>
	                    <span>${qna.USER_NAME}</span>
	                    <span>|</span>
	                    <span style="font-weight: bold;">등록일 </span>
	                    <span>${qna.REG_DATE}</span>
	                    <span>|</span>
	                    <span style="font-weight: bold;">조회수 </span>
	                    <span>${qna.QNA_COUNT}</span>
	                </div>
	                <div class="col-1">
	                    <a onclick="deleteQna(${qna.QNA_SEQ})"><i class="bi bi-trash ms-2"></i></a>	                
	                </div>
	            </div>
	            <div class="row mt-2">
	                <div class="col" style="border-top: 1px solid #EEEEEE;">
	                </div>
	            </div>
	
	            <div class="row my-3"  >
	                <div class="col mt-3">
	                     ${qna.QNA_CONT}
	                </div>
	            </div>
	            <div class="row mt-5" style=" border-bottom: 1px solid #EEEEEE;">
	            	<div class="col">
	            	</div>
	            </div>
                <div id="cmtList"></div>
		        <div class="row" id="cmtListDiv">
		        	<div class="col d-flex justify-content-end">
			        	<a href='javascript:void(0);' id="cmtBtn">
			        		<button class="btn"><i class="bi bi-three-dots"></i></button>
			        	</a>
		        	</div>
		        </div>
		        <div id="cmtMore" style="display: none"></div>
		        <div id="cmtMoreDiv" class="row" style="display: none">
		        	<div class="col d-flex justify-content-end">
			        	<a href='javascript:void(0);' id="cmtBtnMore">
			        		<button class="btn btn-danger"><i class="bi bi-three-dots"></i></button>
			        	</a>
		        	</div>
		        </div>        
            <div class="row py-4">
                <div class="col d-grid">
                	<form action="/qnaManage/insertComment" method="post" onsubmit="insertComment()">
                	<input type="hidden" name="QNA_SEQ" value="${qna.QNA_SEQ}">
                    <div class="input-group">
                        <textarea name="QNAC_CONT" id="qnacCont" rows="3" class="form-control" style="border-right: none; resize: none;"></textarea>
                        <button type="submit" class="input-group-text" style="background-color: white; border-left: none;">댓글 입력</button>
                    </div>
                    </form>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-5">
                    <button onclick="history.back()" class="insertBtn btn btn-outline-primary">목록</button>
	                <c:if test="${!empty qna.FILE_SEQ}">                    
                    <a href="/downloadFile/${qna.FILE_SEQ}"><button class="insertBtn btn btn-outline-primary">파일 다운로드</button></a>
                    </c:if>                    
                </div>
                <div class="col">
	                <c:if test="${!empty qnaMove.QNA_PREV}">
	                    <a href="./readQnaPage?QNA_SEQ=${qnaMove.QNA_PREV}"><button class="insertBtn btn btn-outline-primary me-2" style="float: right;">다음글</button></a>
	                </c:if>
	                <c:if test="${!empty qnaMove.QNA_NEXT}">                
	                    <a href="./readQnaPage?QNA_SEQ=${qnaMove.QNA_NEXT}"><button class="insertBtn btn btn-outline-primary me-5" style="float: right;">이전글</button></a>
	                </c:if>    
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript" src="/js/qnaManage/qnaManagement.js"></script>
<script type="text/javascript">
</script>
