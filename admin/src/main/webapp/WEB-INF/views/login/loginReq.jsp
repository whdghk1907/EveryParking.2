<%--
  Created by IntelliJ IDEA.
  User: blueg
  Date: 2022-03-22
  Time: 오후 1:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
<!-- CSS only -->
<link rel="stylesheet" href="/css/package.css">
<link rel="stylesheet" href="/css/modalCss.css">
<!-- CSS only -->

<script src="/js/ckeditor/build/ckeditor.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/jquery/latest/jquery.min.js"></script>

<%-- 차트 api 추가--%>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.7.1/chart.min.js"></script>

<!-- 공통 js, css-->
<script type="text/javascript" src="/js/common/common.js"></script>
<script type="text/javascript" src="/js/common/grid.js"></script>
    <title>로그인 필요</title>
</head>
<body>


<script>
window.onload=function(){
	cmm.alert("로그인 해주세요", function(){
		location.href = "/login/loginPage";
	})
};
</script>
</body>
</html>
