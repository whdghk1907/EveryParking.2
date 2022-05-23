<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
      <div class="content">

        <!-- top -->
        <div class="top">
          <div class="title">
            <h1> 쿠폰 등록 </h1>
            <span> 고객센터 관리 > 쿠폰 등록 </span>
          </div>
        </div>
        <!-- // top -->
        
        <!-- mainCon -->
        <div class="mainCon">

          <!-- tableWrap -->
          <form action="/couponManagement/insertCoupon" method="post" enctype="multipart/form-data" id="cou">
	          <div class="tableWrap_2 add">
	
	            <!-- tableCon -->
	            <div class="tableCon">
	
	              <!-- mainConHeader -->
	              <div class="mainConHeader">
	                <img src="../img/more.svg">
	                <h2> 쿠폰 등록 </h2>
	                <span> 쿠폰을 작성해 주세요. </span>
	              </div>
	              <!-- // mainConHeader -->
	
	              <!-- table -->
	              
		              <table class="table">
		                <colgroup>
		                  <col style="width:20%;">
		                  <col style="width:80%;">
		                </colgroup>
		                <tr>
		                  <th> 쿠폰명 </th>
		                  <td> <input class="form-control" type="text" id="inputCouName" name="COU_NAME" placeholder="쿠폰명을 입력해주세요." style="height: 100%; width: 50%;"> </td>
		                </tr>
		                
		                 <tr>
		                  <th> 쿠폰이미지 </th>
		                  <td><img id="thumbNail" style="height: 100px; width: auto;" class="img-fluid"></td>
		                </tr>
		                
		                 <tr>
		                  <th> </th>
		                  <td> <input type="file" name="FILE_SEQ" id="inputThumbnail" style="width: 100%"> </td>
		                </tr>
		                
		                 <tr>
		                  <th> 쿠폰 가격 </th>
		                  <td> <input class="form-control" type="text" id="inputCouPrice" name="COU_PRICE" placeholder="쿠폰가격을 입력해주세요." style="height: 100%; width: 50%;" onkeypress="onlyNum();"> </td>
		                </tr>
		                
		                 <tr>
		                  <th> 쿠폰 발행수 </th>
		                  <td> <input class="form-control" type="text" id="inputCouCount" name="COU_COUNT" placeholder="발행수를 입력해주세요." style="height: 100%; width: 50%;" onkeypress="onlyNum();"> </td>
		                </tr>
		                
		              </table>
	              
	              <!-- // table -->
	
	            </div>
	            <!-- //tableCon -->
	
	            <!-- rightBottomBtn -->
	            <div class="rightBottomBtn rightBottomBtn02">
	              <button type="button" onclick="location.href='/couponManagement/couponManagement'"> 취소 </button>
	              <button type="submit" id="couponBtn"> 쿠폰 등록 </button>
	            </div>
	            <!-- // rightBottomBtn --> 
	            
	          </div>
          </form>
          <!-- // tableWrap -->

        </div>
        <!-- // mainCon -->
        
      </div>
<script type="text/javascript" src="/js/couponManagement/couponInsertForm.js"></script>

