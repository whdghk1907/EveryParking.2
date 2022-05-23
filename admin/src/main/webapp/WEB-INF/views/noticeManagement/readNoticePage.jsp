<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>  
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>  
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 공지사항 관리 </h1>
            <span> 고객센터 관리 > 공지사항 관리 </span>
          </div>
        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon answer">

          <!-- mainConWrap -->
          <div class="mainConWrap answer">

            <!-- mainConHeader -->
            <div class="mainConHeader">
              <h2> 공지 사항 </h2>
            </div>
            <!-- // mainConHeader -->           
            
            <!-- inquiryCon -->
            <div class="inquiryCon">

              <header>
                <h3>${noti.NOTI_TITLE}</h3>
                <ul>
                  <li>
                    <p> 작성자 </p>
                    <span>${noti.USER_NAME }</span>
                  </li>
                  <li>
                    <p> 등록일 </p>
                    <span>${noti.REG_DATE }</span>
                  </li>
                  <li>
                    <p> 조회수 </p>
                    <span>${noti.NOTI_COUNT }</span>
                  </li>
                </ul>
              </header>

              <hr>

              <main>
                <p>
                ${noti.NOTI_CONT }
                </p>
              </main>

              <hr>

            <!-- rightBottomBtn -->
             <!-- // rightBottomBtn --> 
            </div>
            <!-- // inquiryCon -->
            <div class="leftBottomBtn leftBottomBtn02">
 					<a href="./noticeManagement"><button class="insertBtn btn btn-outline-primary">목록</button></a>
	                <c:if test="${!empty noti.FILE_SEQ}">                    
                    <a href="/downloadFile/${noti.FILE_SEQ}"><button class="insertBtn btn btn-outline-primary">파일 다운로드</button></a>
                    </c:if>
            </div>
 

          </div>
          <!-- // mainConWrap -->
          
          <div class="rightBottomBtn rightBottomBtn02" style=" margin-top: 30px; ">
	                <c:if test="${!empty move.NOTI_PREV}">
	                    <a href="./readNoticePage?NOTI_SEQ=${move.NOTI_PREV}"><button class="insertBtn btn btn-outline-primary me-2" style="float: right;">다음글</button></a>
	                </c:if>
	                <c:if test="${!empty move.NOTI_NEXT}">                
	                    <a href="./readNoticePage?NOTI_SEQ=${move.NOTI_NEXT}"><button class="insertBtn btn btn-outline-primary me-5" style="float: right;">이전글</button></a>
	                </c:if>    
            </div>          
          


        </div>
        <!-- // mainCon -->
        
      </div>
<script type="text/javascript" src="/js/qnaManage/qnaManagement.js"></script>
<script type="text/javascript">
</script>
