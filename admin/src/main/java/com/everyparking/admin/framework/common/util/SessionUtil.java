package com.everyparking.admin.framework.common.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.everyparking.admin.framework.common.vo.MemberVo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.ModelAndView;

import java.util.Enumeration;
import java.util.HashMap;

public class SessionUtil {


    private static final Logger logger = LoggerFactory.getLogger(SessionUtil.class);
    /**
     * session에 데이터 생성
     * @param request
     * @param key
     * @param object
     */
    public static void setSessionData(HttpServletRequest request, String key, Object object){
        setSessionData(request.getSession(), key, object);
    }

    /**
     * session에 데이터 생성
     * @param session
     * @param key
     * @param object
     */
    public static void setSessionData(HttpSession session, String key, Object object){
        session.setAttribute(key, object);
    }

    /**
     * 세션정보 지우기
     * @param session
     */
    public static void clearSession(HttpSession session){
        Enumeration<String> enumeration = session.getAttributeNames();
        while(enumeration.hasMoreElements()){
            String key = enumeration.nextElement();
            session.removeAttribute(key);
        }
    }

    /**
     * targetMap에 Session의 user정보로 작성자, 수정자 셋팅
     * @param request
     * @param targetMap
     */
    public static void setCreator(HttpServletRequest request, HashMap<String, Object> targetMap) throws Exception{
        setCreator(request.getSession(), targetMap);
    }

    /**
     * targetMap에 Session의 user정보로 작성자, 수정자 셋팅
     * @param session
     * @param targetMap
     */
    @SuppressWarnings("unchecked")
    public static void setCreator(HttpSession session, HashMap targetMap) throws Exception {
        try {
            MemberVo sessionUser = (MemberVo) session.getAttribute("sessionUser");
            targetMap.put("REG_SEQ", sessionUser.getUSER_SEQ());
            targetMap.put("USER_SEQ", sessionUser.getUSER_SEQ());
            targetMap.put("MOD_SEQ", sessionUser.getUSER_SEQ());
        }catch(Exception e) {
            logger.error("========================로그인 오류!!!!! 세션 없음!!===========================");
            e.printStackTrace();
            throw new Exception("로그인 오류!!!!! 세션 없음!!");
        }
    }

    public static ModelAndView checkSession(HttpSession session) {
        MemberVo sessionUser = (MemberVo) session.getAttribute("sessionUser");
        ModelAndView mav = new ModelAndView();
        if(sessionUser != null){
            mav.addObject("sessionUser", sessionUser);
        }
        return mav;
    }

    public static HashMap<String, Object> getUSER_SEQ(HttpSession session) {
        HashMap<String, Object> data = new HashMap<>();
        MemberVo sessionUser = (MemberVo) session.getAttribute("sessionUser");
        data.put("USER_SEQ", sessionUser.getUSER_SEQ());
        return data;
    }
}
