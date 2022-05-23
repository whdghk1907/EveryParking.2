<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<header class="navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow" style="background-color: #313a46;">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/admin/Home">우리의 주차장
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" style="top: 0%; right: 0%;">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="w-100"></div>
    <div class="navbar-nav">
        <div class="nav-item text-nowrap">
            <c:if test="${!empty sessionUser }">
                <a class="nav-link px-3" href="/login/loginPage">Sign out</a>
            </c:if>

        </div>
    </div>
</header>