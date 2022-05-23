<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <jsp:include page="headPart/commInclude.jsp"></jsp:include>
    <tiles:insertAttribute name="title"/>
  </head>

  <body>
    <!-- wrap -->
    <div class="wrap">
    <tiles:insertAttribute name="menu"/>
    <tiles:insertAttribute name="body"/>
    
    </div>
    <!-- // wrap -->
    <!-- script -->
	<jsp:include page="bottomPart/commInclude.jsp"></jsp:include>
    <!-- // script -->

  </body>
</html>
