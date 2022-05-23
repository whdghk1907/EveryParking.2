package com.everyparking.admin.framework.file.service;

import com.everyparking.admin.framework.common.util.FileUtil;
import com.everyparking.admin.framework.common.util.SessionUtil;
import com.everyparking.admin.framework.file.dao.FileDao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@Service
public class FileServiceImpl implements FileService{

    private static final Logger logger = LoggerFactory.getLogger(FileServiceImpl.class);

    @Autowired
    FileDao fileDao;
    @Autowired
    FileUtil fileUtil;

    @Override
    public HashMap<String, Object> getFile(HashMap<String, Object> params) throws Exception {
        return fileDao.getFile(params);
    }

    @Override
    public List<Integer> uploadFile(HttpServletRequest request, String filePath) throws Exception {
        List<HashMap<String,Object>> fileList = fileUtil.uploadFile(request, filePath);
        List<Integer> file_seq = null;
        if(fileList != null && fileList.size()>0){
            file_seq = new ArrayList<Integer>();
            for (HashMap<String, Object> map : fileList) {
                SessionUtil.setCreator(request, map);
                try {
                    insertFile(map);
                    file_seq.add((Integer) map.get("FILE_SEQ"));
                } catch (Exception e) {
                    logger.error(e.getMessage());
                }
            }
        }
        return file_seq;
    }

    @Override
    public int insertFile(HashMap<String, Object> params) throws Exception {
        return fileDao.insertFile(params);
    }

}
