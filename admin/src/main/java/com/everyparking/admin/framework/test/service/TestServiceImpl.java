package com.everyparking.admin.framework.test.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.everyparking.admin.framework.test.dao.TestSqlDao;

@Service
@Transactional
public class TestServiceImpl implements TestService{

	@Autowired
	private TestSqlDao testSqlDao;
	
	@Override
	public HashMap<String, Object> DBTest(){ 
		return testSqlDao.DBTest();
	}

}
