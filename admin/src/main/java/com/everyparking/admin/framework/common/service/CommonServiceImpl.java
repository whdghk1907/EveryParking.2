package com.everyparking.admin.framework.common.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.everyparking.admin.framework.common.dao.CommonDao;
import com.everyparking.admin.framework.common.dao.MainDao;
import com.everyparking.admin.framework.common.util.MessageDigestUtil;
import com.everyparking.admin.framework.common.vo.MemberVo;

@Service
@Transactional(rollbackFor = Exception.class)
public class CommonServiceImpl implements CommonService {

    @Autowired
    CommonDao commonDao;
    
    @Autowired
    MainDao mainDao;
    
    @Override
    public HashMap<String, Object> todayData() {
        HashMap<String, Object> data = new HashMap<>();
        data.put("noti", mainDao.getNotiList());
        data.put("qna", mainDao.getQNAList());
        data.put("tocn", mainDao.getReserTodayCount());
        data.put("yecn", mainDao.getReserYesterCount());
        data.put("ttcn", mainDao.getReserTotalCount());
        return data;
    }
    
    @Override
    public void registerMember(MemberVo vo) {

        //회원가입쪽 비밀번호 해싱
        String password = vo.getUSER_PW();
        password = MessageDigestUtil.getPasswordHashCode(password);
        vo.setUSER_PW(password);

        commonDao.registerMember(vo);
    }
    
    @Override
    public MemberVo login(MemberVo vo) {

        //로그인쪽 비밀번호 해싱
        String password = vo.getUSER_PW();
        password = MessageDigestUtil.getPasswordHashCode(password);
        vo.setUSER_PW(password);

        MemberVo result = commonDao.getMemberByIdAndPw(vo);
        return result;
    }
    
    //우대사항 코드
    @Override
    public List<HashMap<String, Object>> getSubCodeRoyalUser() {
    	return commonDao.getSubCodeRoyalUser();
    }


    
}
