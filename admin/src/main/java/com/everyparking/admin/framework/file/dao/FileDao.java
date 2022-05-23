package com.everyparking.admin.framework.file.dao;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;

@Repository
@Mapper
public interface FileDao {
    public HashMap<String,Object> getFile(HashMap<String,Object> params) throws Exception;
    public int insertFile(HashMap<String,Object> params) throws Exception;
}
