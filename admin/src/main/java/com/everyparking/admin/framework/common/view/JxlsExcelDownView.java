package com.everyparking.admin.framework.common.view;

import org.jxls.common.Context;
import org.jxls.util.JxlsHelper;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.view.AbstractView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.Map;

/** 작성자: 김청룡
 *  작성일: 22-03-11
 *  설명: 엑셀 다운로드 템플릿 활용
 * **/

@Component
public class JxlsExcelDownView extends AbstractView{

    @Override
    protected void renderMergedOutputModel(Map<String, Object> map, HttpServletRequest request, HttpServletResponse response) throws IOException {
        String template = (String) map.get("template");
        String newfileName = (String) map.get("newfileName");
        InputStream is = new ClassPathResource("/templates/" + template +".xlsx").getInputStream();
        String fileName = new String(newfileName.getBytes("KSC5601"), "8859_1");
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename="+fileName+".xlsx");
        Context context = new Context();
        context.putVar("data", map.get("data"));
        JxlsHelper.getInstance().processTemplate(is, response.getOutputStream(), context);
    }
}
