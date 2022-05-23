<%--
  Created by IntelliJ IDEA.
  User: blueg
  Date: 2022-03-11
  Time: 오후 5:33
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <link rel="stylesheet" href="/css/adminCss.css">
    <title>Document</title>
</head>
<body>
<div class="container-fluid">
    <div class="row loginBox" style="margin: auto;">
        <div class="col">
            <div class="row my-4">
                <div class="col text-center">
                    <img class="logoMain mt-5" src="/img/logo2.png">
                </div>
            </div>
            <div class="row" style="margin: auto">
                <div class="col">
                    <form action="/login/loginProcess" method="post">
                        <div class="row mt-5 mb-4">
                            <div class="col text-center"><span class="login">관리자 로그인</span></div>
                        </div>
                        <div class="form-floating mt-2">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="USER_MAIL">
                            <label for="floatingInput">이메일</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" name="USER_PW">
                            <label for="floatingPassword">비밀번호</label>
                        </div>
                        <div class="row mb-5 pb-4">
                            <div class="col d-grid"><button class="btn btn-primary">로그인</button></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</body>
</html>
