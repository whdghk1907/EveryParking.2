package com.everyparking.admin.framework.common.dao;

import com.everyparking.admin.framework.common.vo.MemberVo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Mapper
@Repository
public interface CommonDao {
    public void registerMember(MemberVo vo);
   
    public MemberVo getMemberByIdAndPw(MemberVo vo);
    
    public MemberVo getMemberByNo(int SEQ);
   
    public List<HashMap<String, Object>> getSubCodeRoyalUser();



}
