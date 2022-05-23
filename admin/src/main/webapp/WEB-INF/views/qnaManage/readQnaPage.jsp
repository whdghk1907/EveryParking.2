<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<form action="/qnaManage/insertComment" method="post" onsubmit="insertComment()">
<input type="hidden" name="QNA_SEQ" value="${qna.QNA_SEQ}">
  
      <div class="content">
        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 문의 내역 관리 </h1>
            <span> 고객센터 관리 > 문의 내역 관리 </span>
          </div>
        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon answer">

          <!-- mainConWrap -->
          <div class="mainConWrap answer">

            <!-- mainConHeader -->
            <div class="mainConHeader">
              <h2> 문의 내역 </h2>
            </div>
            <!-- // mainConHeader -->           
            
            <!-- inquiryCon -->
            <div class="inquiryCon">

              <header>
                <h3> ${qna.QNA_TITLE } </h3>
                <ul>
                  <li>
                    <p> 작성자 </p>
                    <span> ${qna.USER_NAME } </span>
                  </li>
                  <li>
                    <p> 등록일 </p>
                    <span>${qna.REG_DATE }</span>
                  </li>
                  <li>
                    <p> 조회수 </p>
                    <span>${qna.QNA_COUNT } </span>
                  </li>
                </ul>
              </header>

              <hr>

              <main>
                <p>
                ${qna.QNA_CONT }
                </p>
              </main>

              <hr>

              <section class="answered" id="cmtList">
              </section>
              
	          <div id="cmtListDiv" class="rightBottomBtn rightBottomBtn02">
				<a id="cmtBtn">
			   	 <button type = "button">더보기</button>
			   	</a>
	          </div>
              
              <section class="answered" id="cmtMore" style="display: none">
              </section>
          
	          <div id="cmtMoreDiv" class="rightBottomBtn rightBottomBtn02" style="display: none">
				<a id="cmtBtnMore">
			   	 <button type = "button">닫기</button>
			   	</a>
	          </div>              
              
              <section class="nowAnswer">
                <div>
                  <img src="../img/write.svg">
                  <p>답변하기</p>
                </div>
                
                <textarea rows="10" name="QNAC_CONT" id="qnacCont" placeholder="답변을 입력해주세요."></textarea>
              </section>
				
            </div>
            <!-- // inquiryCon -->

            <!-- rightBottomBtn -->
            <div class="rightBottomBtn rightBottomBtn02">
              <button type="button" onclick = "history.back()"> 닫기 </button>
              <button type="submit"> 등록 </button>
            </div>
            
            <!-- // rightBottomBtn --> 
          </div>
          
          <!-- // mainConWrap -->

        </div>
        <!-- // mainCon -->
        
      </div>
</form>
<div id = "modalZone"></div>

<script type="text/javascript" src="/js/qnaManage/qnaManagement.js"></script>
<script type="text/javascript"></script>
