package com.everyparking.admin.framework.common.controller;

import com.everyparking.admin.api.parkingBlock.service.ParkingBlockService;
import com.everyparking.admin.api.profitCost.service.ProfitCostService;
import com.everyparking.admin.api.userhistory.service.UserHistoryService;
import com.everyparking.admin.framework.common.view.JxlsExcelDownView;
import com.everyparking.admin.framework.common.view.PoiExcelDownView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.*;

@Controller
@RequestMapping("/excel")
public class ExcelController extends BaseController {

        private static final Logger logger = LoggerFactory.getLogger(ExcelController.class);

        @Autowired
        private JxlsExcelDownView jv;

        @Autowired
        private PoiExcelDownView pv;

        @Autowired
        ProfitCostService profitCostService;

        @Autowired
        ParkingBlockService parkingBlockService;
        
        @Autowired
        UserHistoryService userHistoryService;

        /** 작성자: 김청룡
         *  작성일: 22-03-11
         *  수정일: 22-03-12   사유: ModelAndView 리턴
         * 템플릿을 활용한 엑셀 다운로드 구현 예시입니다.   **/
        @RequestMapping(value = "/downbyjxls")
        public ModelAndView excelDown(HttpServletResponse response) throws IOException {

        //임시 데이터 만들기

        Map<String, Object> data = new HashMap<String, Object>();
        List<HashMap<String, Object>> list = new ArrayList<HashMap<String, Object>>();
        HashMap<String, Object> obj = null;
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd HH:mm:ss");
        obj = new HashMap<String, Object>();
        obj.put("name", "나는");
        obj.put("age", "20");
        obj.put("address", "광진구");
        list.add(obj);
        obj = new HashMap<String, Object>();
        obj.put("name", "너는");
        obj.put("age", "30");
        obj.put("address", "분당구");
        list.add(obj);
        obj = new HashMap<String, Object>();
        obj.put("name", "야는");
        obj.put("age", "40");
        obj.put("address", "구로구");
        list.add(obj);
        data.put("list", list);
        data.put("count", list.size());
        data.put("DownloadDate", sdf.format(new Date()));

        /** view로 보낼 파람만들기
         *  엑셀에 나타낼 data와  템플릿파일명, 다운로드 파일명을 map에 넣어 줍니다. 맵 키는 고정입니다. **/
        Map<String, Object> params = new HashMap<String, Object>();
        params.put("data", data);
        params.put("template", "sample");
        params.put("newfileName", "newfileName");

        /** 엑셀 다운로드
         *  Map<String, Object> 안에 data를 담는것을 완료하면 아래와 같이 파라미터 값을 넣어줍니다.
         *  excelDown(응답, 데이타, 템플릿이름, 다운로드시 나타날 이름)
         *  템플릿이름은 resource  > templates 폴더 안에서 확인할 수 있습니다.
         *  템플릿을 여서서 확인 후 각자 원하는 형식으로 바꿀수 있습니다.
         * **/
        return new ModelAndView(jv, params);
        }


        /**
         * 작성자: 김청룡
         * 작성일: 22-03-12
         * 설명: 엑셀 다운로드시 템플릿을 활용하지 않고 다운로드 하는 방식입니다.
         * 하단 주석과 같이 데이터를 입력하면 다운로드가 됩니다
         * **/
        //엑셀  파일 다운로드 request  poi.ver
        @RequestMapping("/downbypoi")
        public ModelAndView excelDownload(HttpServletResponse response, HashMap<String,Object> params) throws Exception {

                List<HashMap<String, Object>> dataList = null;    // 데이터리스트를 넣으세요
                String sheetName = "테스트시트명";      // 엑셀 시트명을 입력해주세요
                String fileName = "test파일명123!@#_";  // 다운로드시 나타날 파일명을 입력해주세요

                Map<String, Object> data = new HashMap<>();
                data.put("dataList", dataList);
                data.put("sheetName", sheetName);
                data.put("fileName", fileName);

                return new ModelAndView(pv, data);
        }

        /**
         *  작성자: 김청룡
         *  설명: 엑셀 예시
         *          * **/


        @RequestMapping("/profitCost")
        public ModelAndView selectListProfitCost(@RequestParam HashMap<String,Object> params) throws Exception{
                HashMap<String, Object> result = new HashMap<>();
                result.put("list", profitCostService.selectListProfitCost(params));
                result.put("today", new Date());
                Map<String, Object> data = new HashMap<String, Object>();
                data.put("data", result);
                data.put("template", "profitCost");
                data.put("newfileName", "profitList");

                return new ModelAndView(jv, data);
        }

        @RequestMapping("/parkingBlock")
        public ModelAndView blockList(@RequestParam HashMap<String,Object> params) throws Exception{
                HashMap<String, Object> result = new HashMap<>();
                result.put("list", parkingBlockService.selectListParkingBlock(params));
                result.put("today", new Date());
                Map<String, Object> data = new HashMap<String, Object>();
                data.put("data", result);
                data.put("template", "parkingBlock");
                data.put("newfileName", "blockList");

                return new ModelAndView(jv, data);
        }
        
        @RequestMapping("/userHistory")
        public ModelAndView userHistory(@RequestParam HashMap<String,Object> params) throws Exception{
                HashMap<String, Object> result = new HashMap<>();
                result.put("list", userHistoryService.selectListHistory(params));
                result.put("today", new Date());
                Map<String, Object> data = new HashMap<String, Object>();
                data.put("data", result);
                data.put("template", "userHistory");
                data.put("newfileName", "userHistory");

                return new ModelAndView(jv, data);
        }
}