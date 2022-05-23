<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- noticeInsertModal -->

      <div class="content">
        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 공지사항 관리 </h1>
            <span> 고객 센터 > 공지사항</span>
          </div>

          <!-- topBtn -->
          <button class="topBtn" data-bs-toggle="modal" data-bs-target="#noticeInsertModal">
            <a href="/noticeManagement/noticeInsertForm"> 공지사항 등록 </a>
          </button>
           <!-- // topBtn -->

        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- tableWrap -->
          <div class="tableWrap">

            <!-- table -->
            <table class="table" id="noticeManageTable">
            </table>
            <!-- // table -->

          </div>
          <!-- // tableWrap -->
			<div id="pagingBlock3" class="page"></div>
        <!-- // mainCon -->
        
      </div>
<!-- // content -->
</div>
<div id = "modalZone"></div>
<script type="text/javascript" src="/js/noticeManagement/noticeManagement.js">
</script>