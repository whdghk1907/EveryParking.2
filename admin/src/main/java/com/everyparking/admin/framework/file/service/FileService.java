package com.everyparking.admin.framework.file.service;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;

public interface FileService {

    public HashMap<String,Object> getFile(HashMap<String,Object> parmas) throws Exception;
    public List<Integer> uploadFile(HttpServletRequest request, String filePath) throws Exception;
    public int insertFile(HashMap<String,Object> params) throws Exception;

}
