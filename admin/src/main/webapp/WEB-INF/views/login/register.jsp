<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <!-- JavaScript Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="/css/adminCss.css">
    <title>Document</title>
    <!-- 클래식 에디터 -->
    <script src="https://cdn.ckeditor.com/ckeditor5/11.0.1/classic/ckeditor.js"></script>
    <script>
        function back() {
            window.history.back();
        }
    </script>
</head>
<body>
<div class="container-fluid" style="background-color: #F5F5F5;">
    <header>
        <div class="row headerBox py-2 px-0">
            <div class="col-1 px-0 mx-2"><i class="bi bi-arrow-left fs-5" onclick="back()"></i></div>
            <div class="col px-0">
                <h5 class="title">회원 가입</h5>
            </div>
            <div class="col-1 px-0"></div>
        </div>
    </header>
    <main>
        <!-- 수정 해야되는 부분-->
        <div class="row my-5" style="margin-top: auto;">
            <div class="col">
                <div class="row joinBox" style="margin: auto;">
                    <div class="col">
                        <div class="row my-3">
                            <div class="col text-center">
                                <img class="logoMain my-3" src="/img/logo2.png">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <form action="./registerProcess" method="post">
                                    <div class="row mb-1">
                                        <div class="col"><span>이메일</span></div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="USER_MAIL">
                                        <label for="floatingInput">Email address</label>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col"><span>비밀번호</span></div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="USER_PW">
                                        <label for="floatingPassword">Password</label>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col"><span>비밀번호 확인</span></div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Password">
                                        <label for="floatingPasswordConfirm">Password Confirm</label>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col"><span>이름</span></div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingName" placeholder="name" name="USER_NAME">
                                        <label for="floatingName">이름</label>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col"><span>생년월일</span></div>
                                    </div>
                                    <input type="date" class="form-control mb-3" id="floatingBirth" placeholder="Birth" name="USER_BIRTH">
                                    <div class="row mb-1">
                                        <div class="col"><span>차량번호</span></div>
                                    </div>
                                    <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingCarNo" placeholder="CarNo" name="USER_CAR_NO">
                                        <label for="floatingCarNo">차량번호</label>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col">우대 사항</div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <c:forEach items="${getSubCodeRoyalUserList}" var="royalUser">
                                                <input type="checkbox" name="SUB_CODE" value="${royalUser.SUB_CODE}">${royalUser.SUB_NAME }
                                            </c:forEach>
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col">
                                            	장애인 우대 약관
                                        </div>
                                    </div>
                                    <div class="row mb-1">
                                        <div class="col  d-grid">
	                                        <textarea readonly rows="3">1. 장애인전용주차구역 주차표지가 붙어있는 자동차로서 보행에 장애가 있는 사람이 타고 있는 자동차만 주차할 수 있습니다.
	        									2. 이를 위반한 사람에 대하여는 10만원의 과태료를 부과합니다.</textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <div class="col">
                                            <input type="checkbox"> 동의합니다.
                                        </div>
                                    </div>
                                    <div class="row my-4">
                                        <div class="col">
                                            <button class="buttonBox" style="float: right;">회원 가입 완료</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>


</body>
</html>
