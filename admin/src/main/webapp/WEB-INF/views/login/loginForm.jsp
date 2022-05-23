<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <link rel="stylesheet" href="../css/package.css">
    <title> 로그인 | 우주 </title>
  </head>

  <body>
    <!-- wrap -->
    <div class="wrap">
        <!-- loginWrap -->
        <div class="loginWrap">
            <!-- loginBox -->
            <div class="loginBox">
                <img src="/img/logo2.png" alt="우리의 주차장 로고" class="loginLogo">
                <!-- loginForm -->
                <form action="/login/loginProcess" method="post">
                    <input name="USER_MAIL" type="text" placeholder="ID" class="input" id="" required autofocus>
                    <input name="USER_PW" type="password" placeholder="password" class="input" id="" required>
                    <div class="flex flexSB loginLinkBox">
                        <span><a href=""> ID 찾기 </a></span>
                        <span><a href=""> PW 찾기 </a></span>
                        <span><a href="./signup.html"> 회원가입 </a></span>
                    </div>
                    <button type="submit" class="btn bg01" id=""> 로그인 </button>
                </form>
                <!-- // loginForm -->
            </div>
            <!-- // loginBox -->
        </div>
        <!-- // loginWrap -->
    </div>
    <!-- // wrap -->
  </body>
</html>
