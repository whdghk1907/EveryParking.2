package com.everyparking.admin.framework.common.view;

import org.apache.commons.io.FileUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.AbstractView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.net.URLEncoder;
import java.util.Map;

@Component
public class DownloadView extends AbstractView{

    @Value("#{file['file.rootPath']}")
    private String rootPath;

    @Override
    protected void renderMergedOutputModel(Map<String, Object> map, HttpServletRequest request, HttpServletResponse response) throws Exception {
        String FILE_ORG_NAME = (String) map.get("FILE_ORG_NAME");
        String FILE_CONV_NAME = (String) map.get("FILE_CONV_NAME");
        String FILE_URL = (String) map.get("FILE_URL");

        String fileName = URLEncoder.encode(FILE_ORG_NAME,"UTF-8");
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition","attchment; filename="+ fileName);

        FileUtils.copyFile(new File(rootPath + FILE_URL+ "/"+ FILE_CONV_NAME ), response.getOutputStream());
    }
}
