package com.everyparking.admin.framework.common.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.List;

@Mapper
@Repository
public interface MainDao {

    public List<HashMap<String, Object>> getNotiList();
    public List<HashMap<String, Object>> getQNAList();
    public int getReserTodayCount();
    public int getReserYesterCount();
    public int getReserTotalCount();

}
