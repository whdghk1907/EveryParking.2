
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="col mx-3">
    <!--Top title-->
    <div class="row">
        <div class="col px-0 text-start">
            <h1 style="font-size: 40px; font-weight: bold;">유지 비용 관리<span class="fs-6 fw-light"> 주차장 관리비용을 등록할 수 있습니다.</span></h1>
        </div>

        <div class="col-2 mt-3 text-end">
            <form action="">
                <button type= "button" class="btn btn-light btn-sm adminBorder borderBottom">비용 등록</button>
            </form>
        </div>
    </div>
    <!--Dropdown-->
    <div class="row">
        <div class="col-2 mt-3 ms-0 ps-0">
            <select class="form-select" aria-label="주차장 검색">
                <option selected>전체</option>
                <option value="parkingLot_name">주차장명</option>
                <option value="manage_name">비용 사유</option>
            </select>
        </div>
    </div>
    <!-- 흰 내용 부분 -->
    <div class="row adminBorder borderBottom backgroundColorwhite">
        <div class="col mx-3" style="height: 600px;">
            <div class="row mt-4">
                <div class="col">
                    <h4 style="font-weight: bold;">수리비</h4>
                </div>
            </div>
            <div class="row my-4">
                <div class="col">
                    <span style="font-weight: bold;">작성자 </span>
                    <span>아무개</span>
                    <span>|</span>
                    <span style="font-weight: bold;">등록일 </span>
                    <span>2022.02.26</span>
                    <span>|</span>
                    <span style="font-weight: bold;">a 주차장 </span>
                    <span>|</span>
                    <span style="font-weight: bold;">비용 </span>
                    <span>100,000원</span>
                </div>
            </div>
            <div class="row mt-2">
                <div class="col" style="border-top: solid 1px #a6a6a6;"></div>
            </div>
            <!-- 내용 영역인데 에디터가 들어가야할 공간이 필요하대서 그냥 height 값 설정해둘게요 -->
            <div class="row my-3">
                <div class="col mt-3" style="height: 320px;">
                    굳이 쓰자면 애초에 유지 비용 관리를 작성할 때 설명을 길게 예를 들면
                    2022년 3월 8일에 홍길동 아저씨께서 여성 주차 구역부터 전기차 구역까지 청소 및
                    기기를 수리해주셨고 비용은 100,000원이 지출되었으며 현장에서 현금으로 지급했습니다.
                    이런 식으로 적게 만들면 좀 낫지 않을까 싶습니다 자세한 사항은 회의 때 고민하시죠 아이디어가 떠오르지 않습니다
                </div>
            </div>

            <div class="row my-4">
                <div class="col-5">
                    <button class="insertBtn btn btn-outline-primary">목록</button>
                </div>
                <div class="col">
                    <button class="insertBtn btn btn-outline-primary me-5" style="float: right;">다음글 〉</button>
                    <button class="insertBtn btn btn-outline-primary me-2" style="float: right;">〈 이전글</button>
                </div>
            </div>
        </div>
    </div>
</div>
