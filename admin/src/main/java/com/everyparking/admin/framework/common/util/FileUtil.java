package com.everyparking.admin.framework.common.util;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.*;

import com.everyparking.admin.HomeController;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.FilenameUtils;
import org.bouncycastle.util.Arrays;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import javax.servlet.http.HttpServletRequest;

@Component
public class FileUtil {

	private static final Logger logger = LoggerFactory.getLogger(FileUtil.class);

	@Value("#{file['file.rootPath']}")
	private String rootPath;

	public List<HashMap<String,Object>> uploadFile(HttpServletRequest request, String filePath){
		List<HashMap<String,Object>> result = null;
		try{
			MultipartRequest multiRequest = (MultipartRequest) request;
			Map<String, MultipartFile> map = multiRequest.getFileMap();
			Iterator<String> iterator = map.keySet().iterator();
			result = new ArrayList<>();
			while (iterator.hasNext()){
				try{
					String key = iterator.next();
					MultipartFile mf = map.get(key);
					String fileOrgName = mf.getOriginalFilename();
					String ext = fileOrgName.substring(fileOrgName.lastIndexOf("."));
					String fileConvertName = this.makeUUID()+ext;
					String fileContentType  = mf.getContentType();
					String fileSize = String.valueOf(mf.getSize());

					// 오늘 날짜 폴더 생성
					String folderPath = "";
					Date date = new Date();
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
					folderPath = sdf.format(date);

					String fullPath =  filePath +"/"+folderPath+"/";
					File path = new File(rootPath + fullPath);
					File file = new File(rootPath + fullPath+fileConvertName);

					if(!path.exists()){
						path.mkdirs();
					}

					mf.transferTo(file);

					HashMap<String,Object> fileInfo = new HashMap<>();
					fileInfo.put("FILE_ORG_NAME", fileOrgName);
					fileInfo.put("FILE_URL", fullPath);
					fileInfo.put("FILE_EXT", ext);
					fileInfo.put("FILE_CONV_NAME", fileConvertName);
					fileInfo.put("FILE_TYPE", fileContentType);
					fileInfo.put("FILE_SIZE", fileSize);
					result.add(fileInfo);
				}catch (Exception e){
					logger.error(e.getMessage());
				}
			}
		}catch (Exception e){
			e.printStackTrace();
			logger.error(e.getMessage());
		}
		return result;
	}

	// UUID 생성
	private String makeUUID(){
		UUID uuid = UUID.randomUUID();
		return uuid.toString();
	}

	public String editorImg(MultipartFile mf, String contextPath) {

		// 오늘 날짜 폴더 생성
		String folderPath = "";
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("/yyyy/MM/dd/");
		folderPath = sdf.format(date);

		File todayFolder = new File(rootPath + contextPath + folderPath);

		if(!todayFolder.exists()) {
			todayFolder.mkdirs();
		}

		// 랜덤 이름 생성
		UUID uuid = UUID.randomUUID();
		String randomName = uuid.toString();
		String ext = "." + FilenameUtils.getExtension(mf.getOriginalFilename());
		String newfileName = randomName + System.currentTimeMillis() + ext;

		// 파일 전송
		try {
			mf.transferTo(new File(rootPath+ contextPath + folderPath + newfileName));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// 파일 url 리턴
		return  "/uploadImage/" + contextPath + folderPath + newfileName;
	}

}
