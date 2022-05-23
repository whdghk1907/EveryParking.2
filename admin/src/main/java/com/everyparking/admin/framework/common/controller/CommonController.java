package com.everyparking.admin.framework.common.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.everyparking.admin.framework.common.service.CommonService;
import com.everyparking.admin.framework.common.util.FileUtil;

@Controller
@RequestMapping("/admin")
public class CommonController extends BaseController{

    private static final Logger logger = LoggerFactory.getLogger(CommonController.class);

    @Autowired
    CommonService commonService;

    @Autowired
    FileUtil fileUtil;

    @RequestMapping("/Home")
    public String adminHome(){
        return "/parkingManage/adminHome";
    }

    @ResponseBody
    @RequestMapping("/editor/uploadView")
    public Map<String, Object> imageUpload(@RequestParam("upload") MultipartFile image, HttpServletRequest request) throws IOException {
        Map<String, Object> data = new HashMap<String, Object>();
        if(image != null) {
            String originalName = image.getOriginalFilename();
            /**
             *   -------------------------------
             *   db에 이미지 기존 이름 저장
             *   -------------------------------
             * **/

            /**  new FileUtil(MultipartFile image, enum객체로 폴더 선택)     **/

            /**
             *   -------------------------------
             *   db에 이미지 url저장
             *   -------------------------------
             * **/
            data.put("uploaded", 1);
            data.put("fileName", originalName);
            data.put("url", fileUtil.editorImg(image, "noti"));
        }
        return data;
    }

    @RequestMapping("/code")
    public String code() {
        return "/code/codeMan";
    }
}
