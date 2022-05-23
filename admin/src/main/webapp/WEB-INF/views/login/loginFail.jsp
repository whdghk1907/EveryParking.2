<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Insert title here</title>
</head>
<body>


<script>
window.onload=function(){
	cmm.alert("로그인 정보가 올바르지 않습니다.", function(){
		location.href="/login/loginPage";
	})
};
</script>
</body>
</html>