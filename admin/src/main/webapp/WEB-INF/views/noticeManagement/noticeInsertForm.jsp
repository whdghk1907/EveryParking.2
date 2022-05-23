<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
      <div class="content">
<form action="/noticeManagement/insertNoti" method="post" enctype="multipart/form-data" onsubmit = "uploadData()" >
<input type="hidden" name="editorData">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 공지사항 관리 </h1>
            <span> 고객센터 관리 > 공지사항 관리 </span>
          </div>
        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- tableWrap -->
          <div class="tableWrap_2 add">

            <!-- tableCon -->
            <div class="tableCon">

              <!-- mainConHeader -->
              <div class="mainConHeader">
                <img src="../img/more.svg">
                <h2> 공지사항 등록 </h2>
                <span> 공지사항을 작성해 주세요. </span>
              </div>
              <!-- // mainConHeader -->

              <!-- table -->
              
              <table class="table">
                <colgroup>
                  <col style="width:20%;">
                  <col style="width:80%;">
                </colgroup>
                <tr>
                  <th> 제목 </th>
                  <td><input class="input_2" name="notiTitle" type="text" placeholder="제목을 입력해주세요."></td>
                </tr>
                <tr>
                  <th> 내용 </th>
                  <td><textarea id ="writeEditor" placeholder="내용을 입력해주세요."></textarea></td>
                </tr>
                <tr>
                  <th> 파일 </th>
                  <td><input type="file" name="FILE_SEQ" id="files"></td>
                </tr>
              </table>
              <!-- // table -->

            </div>
            <!-- //tableCon -->

            <!-- rightBottomBtn -->
            <div class="rightBottomBtn rightBottomBtn02">
              <button type="button" onclick="history.back();"> 취소 </button>
              <button type="submit"> 등록 </button>
            </div>
            <!-- // rightBottomBtn --> 
            
          </div>
          <!-- // tableWrap -->

        </div>
</form>        
        <!-- // mainCon -->
        
      </div>
<script type="text/javascript" src="/js/noticeManagement/noticeManagement.js"></script>

