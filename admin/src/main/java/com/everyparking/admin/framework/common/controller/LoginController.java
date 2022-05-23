package com.everyparking.admin.framework.common.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.everyparking.admin.framework.common.service.CommonService;
import com.everyparking.admin.framework.common.util.SessionUtil;
import com.everyparking.admin.framework.common.vo.MemberVo;

@Controller
@RequestMapping("/login")
public class LoginController extends BaseController {
	
	@Autowired
	CommonService commonService;
	
    @RequestMapping("/loginPage")
    public String loginForm(){
        return "/login/loginForm";
    }


	@RequestMapping("/loginProcess")
	public ModelAndView loginProcess(HttpServletRequest request, MemberVo param) throws Exception {
		
		MemberVo sessionUser = commonService.login(param);
		ModelAndView mav = new ModelAndView();
		
		
		if(sessionUser != null) {
			mav.addObject("sessionUser", sessionUser);
			if (sessionUser.getUSER_TYPE().equals("US02")) {
				//로그인 인증 성공 
				SessionUtil.setSessionData(request, "sessionUser", sessionUser);
				mav.setViewName("redirect: /parkingManage/adminHome");
			} else {
				//로그인 인증 실패
				mav.setViewName("/login/loginFail");
			}
		} else {
			mav.setViewName("/login/loginFail");
		}
		
		return mav;
	}

	@RequestMapping("/logout")
	public String loggout(HttpSession session, HttpServletRequest request) {
		session.invalidate();
		return "redirect:/login/loginPage";
	}

	@RequestMapping("/loginReq")
	public String loginReq() {
		return "/login/loginReq";
	}
	
}