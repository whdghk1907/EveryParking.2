package com.everyparking.admin.framework.common.interceptor;

import com.everyparking.admin.framework.test.controller.TestRestController;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.ModelAndViewDefiningException;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoggerInterceptor extends HandlerInterceptorAdapter {

    private static final Logger logger = LoggerFactory.getLogger(LoggerInterceptor.class);

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if(request.getSession().getAttribute("sessionUser") == null) {
            ModelAndView mav = new ModelAndView();
            mav.setViewName("/login/loginReq");
            logger.info("======================================          로그인 필요         ======================================");
            throw new ModelAndViewDefiningException(mav);
        }
        

        logger.info("======================================          START         ======================================");
        logger.info(" Request URI :  " + request.getRequestURI());
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        logger.info("======================================           END          ======================================\n");


    }
}
