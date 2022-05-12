package com.everyparking.admin.framework.test.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.everyparking.admin.framework.test.dao.TestSqlDao;

@Service
@Transactional(rollbackFor = {Exception.class})
public class TestServiceImpl implements TestService{

	@Autowired
	private TestSqlDao testSqlDao;
	
	@Override
	public HashMap<String, Object> DBTest(HashMap<String, Object> params) {
		return testSqlDao.DBTest(params);
	}

}
