<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="path" value="${requestScope['javax.servlet.forward.servlet_path']}" /> 
<header class="header">

        <!-- userInfo -->
        <div class="userInfo">
          <img src="/img/user.svg" alt="사용자 프로필" class="userProfile">
          <span> ${sessionUser.USER_NAME } 님</span>
        </div>
        <!-- // userInfo -->
        <!-- nav -->
        <nav class="nav">
          <dl>
            <dt <c:if test="${path == '/parkingManage/adminHome' }">class="act focus lighten"</c:if>>
              <div class="icon home"></div>
              <span><a href="/parkingManage/adminHome"> 관리페이지 홈 </a></span>
            </dt>
            <dt <c:if test="${
            	   path eq '/parkingManage/parkingZone'
            	or path eq '/parkingBlock/parkingBlock'
            	or path eq '/profitCost/costTable' 	
            	or path eq '/parkingManage/userHistory'
            	or path eq '/profitCost/profitChart'
            }">class="lighten"</c:if>>
              <div class="icon parking"></div>
              <span> 주차장 관리 </span>
            </dt>
            
            <dd <c:if test="${path == '/parkingManage/parkingZone' }">class="focus"</c:if>><a href="/parkingManage/parkingZone"> 주차장 홈 </a></dd>
            <dd <c:if test="${path == '/parkingBlock/parkingBlock' }">class="focus"</c:if>><a href="/parkingBlock/parkingBlock"> 차단 시간 설정 </a></dd>
            <dd <c:if test="${path == '/profitCost/costTable' }">class="focus"</c:if>><a href="/profitCost/costTable"> 유지 비용 관리 </a></dd>
            <dd <c:if test="${path == '/parkingManage/userHistory' }">class="focus"</c:if>><a href="/parkingManage/userHistory"> 이용 내역 조회 </a></dd>
            <dd <c:if test="${path == '/profitCost/profitChart' }">class="focus"</c:if>><a href="/profitCost/profitChart"> 순 수익 조회 </a></dd>
            <dt <c:if test="${
            	   path eq '/noticeManagement/noticeManagement'
            	or path eq '/qnaManage/qnaManage'
            	or path eq '/couponManagement/couponManagement' 	
            	or path eq '/chat/adminChat'
            }">class="lighten"</c:if>>
              <div class="icon cs"></div>
              <span> 고객센터 관리 </span>
            </dt>
            <dd <c:if test="${path == '/noticeManagement/noticeManagement' }">class="focus"</c:if>><a href="/noticeManagement/noticeManagement"> 공지사항 관리 </a></dd>
            <dd <c:if test="${path == '/qnaManage/qnaManage' }">class="focus"</c:if>><a href="/qnaManage/qnaManage"> 문의 내역 관리 </a></dd>
            <dd <c:if test="${path == '/couponManagement/couponManagement' }">class="focus"</c:if>><a href="/couponManagement/couponManagement"> 쿠폰 관리 </a></dd>
            <dd <c:if test="${path == '/chat/adminChat' }">class="focus"</c:if>><a href="/chat/adminChat"> 1:1 문의 </a></dd>
            <dt>
              <div class="icon logout"></div>
              <span> <a href="/login/logout">Sign out</a> </span>
            </dt>
          </dl>
        </nav>
        <!-- // nav -->
      </header>