package com.everyparking.admin.framework.common.service;

import java.util.HashMap;
import java.util.List;

import com.everyparking.admin.framework.common.vo.MemberVo;

public interface CommonService {

    public HashMap<String, Object> todayData();

    public void registerMember(MemberVo vo);
	
    public MemberVo login(MemberVo vo);
        
    public List<HashMap<String, Object>> getSubCodeRoyalUser();
}
