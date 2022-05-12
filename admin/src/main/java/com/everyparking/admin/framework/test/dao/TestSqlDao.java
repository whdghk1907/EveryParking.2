package com.everyparking.admin.framework.test.dao;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface TestSqlDao {
	public HashMap<String, Object> DBTest(HashMap<String, Object> params);

}
