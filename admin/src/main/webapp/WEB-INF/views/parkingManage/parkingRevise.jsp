<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>	
		<div class="content">
		<form action="/parkingManage/updateParkingInfo" onsubmit="return checkForm()" enctype="multipart/form-data" method="post" id="parkingInfoDetailForm" onsubmit="return parkingRevise.validForm()">
			<input type="hidden" name="PARK_SEQ">
			<!-- top -->
	        <div class="top">
	          <div class="title">
	            <h1> 주차장 수정 </h1>
	            <span> 주차장 관리 > 주차장 홈 > 주차장 등록 </span>
	          </div>
	
	        </div>
	        <!-- // top -->		
        <!-- mainCon -->
        <div class="tab-content selected">
        <div class="mainCon">

          <!-- mainConWrap -->
          <div class="mainConWrap">

            <!-- imgWrap -->
            <div class="imgWrap">
              <img src="/img/parkingLot.svg">
            </div>
            <!-- // imgWrap -->

            <!-- step -->
            <div class="step">

              <!-- step_2 -->
              <div class="step_2">

              <!-- stepTitle -->
              <div class="stepTitle">
                <span> STEP 01 </span>
                <h2> 주차장에서 이용할 구역을 선택해주세요. </h2>
              </div>
              <!-- // stepTitle -->

              <!-- stepConWrap -->
              <div class="stepConWrap">
                <c:forEach items="${ryList}" var="ry" varStatus="i">
                <div class="checkList">
                  <label for="chk${i.count}">
                    <input type="checkbox" id="chk${i.count}" name="SEC_TYPE" value=${ry.SUB_CODE }> ${ry.SUB_NAME } 구역
                  </label>
                  <p> 다른 구역을 제외한 남은 공용주차 구역입니다. </p>
                </div>
                </c:forEach>
              </div>
              <!-- // stepConWrap -->

              </div>
              <!-- // step_2 -->

              <!-- rightBottomBtn -->
              <div class="rightBottomBtn stepBtn">
                <button type="button" onclick="parkingRevise.nextStep()"> 다음 단계 </button>
              </div>
              <!-- // rightBottomBtn -->

            </div>
            <!-- // step -->

          </div>
          <!-- // mainConWrap -->

        </div>
        <!-- // mainCon -->
        </div>
		<div class="tab-content">
        <div class="mainCon">

          <!-- mainConWrap -->
          <div class="mainConWrap">

            <!-- imgWrap -->
            <div class="imgWrap">
              <img src="/img/parkingLot.svg">
            </div>
            <!-- // imgWrap -->

            <!-- step -->
            <div class="step">

              <!-- stepCon -->
              <div class="stepCon">

                <!-- stepTitle -->
                <div class="stepTitle">
                  <span> STEP 02 </span>
                  <h2> 선택한 구역의 주차 가능 대수와 구역별 할인률을 입력해주세요. </h2>
                </div>
                <!-- // stepTitle -->

                <!-- stepConWrap -->
                <div class="stepConWrap">
                  
                  <!-- tableWrap_2 -->
                  <div class="tableWrap_2">

                    <!-- table -->
                    <table class="table">
                      <colgroup>
                        <col style="width:24%;">
                        <col style="width:38%;">
                        <col style="width:38%;">
                      </colgroup>
                      <thead>
                        <tr>
                          <th> 구분 </th>
                          <th> 주차 가능 대수 입력 </th>
                          <th> 할인률 <span> ( 숫자만 입력 ) </span> </th>
                        </tr>
                      </thead>
                      <tbody>
                      <c:forEach items="${ryList}" var="ry">
                        <tr id="SEC_TYPE_${ry.SUB_CODE }">
                          <th> ${ry.SUB_NAME } 구역 </th>
                          <td> <input class="input_2" name="SEC_COUNT" type="text" onkeypress="onlyNum();" placeholder="가능 대수"> </td>
                          <td> <input class="input_2" name="SEC_DIS" type="text" onkeypress="onlyNum();" placeholder="할인율(%)"> </td>
                        </tr>
                      </c:forEach>
                      </tbody>
                    </table>
                    <!-- // table -->

                  </div>
                  <!-- // tableWrap_2 -->

                </div>
                <!-- // stepConWrap -->

              </div>
              <!-- //stepCon -->

                <!-- rightBottomBtn -->
                <div class="rightBottomBtn">
                  <button type="button" onclick="parkingRevise.prevStep()"> 이전 단계 </button>
                  <button type="button" onclick="parkingRevise.nextStep2()"> 다음 단계 </button>
                </div>
                <!-- // rightBottomBtn -->
              
            </div>
            <!-- // step -->

          </div>
          <!-- // mainConWrap -->

        </div>
        </div>
        
        <div class="tab-content">
        <div class="mainCon">

          <!-- mainConWrap -->
          <div class="mainConWrap">

            <!-- imgWrap -->
            <div class="imgWrap" style="width: 550px;">
              <img src="/uploadImage/${imageFile.FILE_URL }${imageFile.FILE_CONV_NAME }" id="thumbNail" onerror="this.src='../img/parkingLot.svg'">
            </div>
            <!-- // imgWrap -->

            <!-- step -->
            <div class="step">

              <!-- step_2 -->
              <div class="step_2">

                <div class="stepTitle">
                  <span> STEP 03 </span>
                  <h2> 주차장 정보를 입력해주세요. </h2>
                </div>

                <!-- stepConWrap -->
                <div class="stepConWrap bgClear">
                  
                  <!-- tableWrap_3 -->
                  <div class="tableWrap_3">

                    <!-- table -->
                    <table class="table">
                      <colgroup>
                        <col style="width:25%;">
                        <col style="width:75%;">
                      </colgroup>
                      <tr>
                        <th> 주차장명 </th>
                        <td> <input name="PARK_NAME" class="input_2" type="text" placeholder="주차장 이름을 입력해주세요."> </td>
                      </tr>
                      <tr>
                        <th> 주차장 위치 </th>
                        <td> 
                          <input id="postcodeName" name="PARK_ADDR1" class="input_2" type="text" placeholder="클릭하여 주소를 입력해주세요."  onclick="postcoderun()" readonly>
                          <input id="postcodeX" type="hidden" name="PARK_ADDR_X">
                          <input id="postcodeY" type="hidden" name="PARK_ADDR_Y">
                        </td>
                      </tr>
                      <tr>
                        <th> 주차장 위치 상세 </th>
                        <td> <input class="input_2" type="text" name="PARK_ADDR2" placeholder="입구 위치 등을 작성해주세요."> </td>
                      </tr>
                      <tr>
                        <th> 주차 비용 </th>
                        <td> <input class="input_2" name="PARK_PRICE" type="text" placeholder="할인율 적용 전 시간 당 비용을 입력해주세요." onkeypress="onlyNum();"> </td>
                      </tr>
                      <tr>
                        <th> 전화 번호 </th>
                        <td> <input class="input_2" name="PARK_PRICE" type="text" placeholder="주차장 전화번호를 입력해주세요." name="PARK_CALL_NUM"> </td>
                      </tr>
                      <tr>
                        <th> 주차장 설명 </th>
                        <td> <textarea rows="7" placeholder="주차장을 설명해주세요." name="PARK_CONT"></textarea> </td>
                      </tr>
                      <tr>
                        <th> 문의시간 </th>
                        <td>
                          <div class="mainCon-TopWrap" style="align-items: center;">
                          <span>OPEN&nbsp;&nbsp;</span><input class="input_2" type="time" name="PARK_OPEN" placeholder="입구 위치 등을 작성해주세요."> 
                          <spen>CLOSE&nbsp;&nbsp;</spen><input class="input_2" type="time" name="PARK_CLOSE" placeholder="입구 위치 등을 작성해주세요.">
                        </div>
                        </td>
                      </tr>
                      <tr>
                        <th> 이미지 업로드 </th>
                        <td>
                          <label for="file">파일 선택</label>
                          <input id="file" class="input_2" type="file" name="profile">
                          <input class="input_2 upload-name" type="text">
                        </td>
                      </tr>
                    </table>
                    <!-- // table -->

                  </div>
                  <!-- // tableWrap_3 -->
                </div>
                <!-- // stepConWrap -->
	              <!-- rightBottomBtn -->
	              <div class="rightBottomBtn">
	                <button type="button" onclick="parkingRevise.prevStep()"> 이전 단계 </button>
	                <button type="submit" onclick="checkForm()"> 수정하기 </button>
	              </div>
	              <!-- // rightBottomBtn -->       
              <!-- step -->
              </div>
       
              
            </div>
            <!-- // step -->

          </div>
          <!-- // mainConWrap -->

        </div>
        </div>
		</form>
	</div>

<script type="text/javascript" src="/js/parkingManage/parkingRevise.js"></script>
<script>
	parkingRevise.init(${PARK_SEQ});
</script>