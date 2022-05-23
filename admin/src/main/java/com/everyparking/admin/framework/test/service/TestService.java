package com.everyparking.admin.framework.test.service;

import java.util.HashMap;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public interface TestService {
	
	public HashMap<String, Object> DBTest();
}
