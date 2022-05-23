package com.everyparking.admin.framework.common.util;

import java.security.MessageDigest;

public class MessageDigestUtil {
	
	public static String getPasswordHashCode(String password) {
		
		//SHA-1 충돌에 대한 방지장치
		password = password + "!EvErYpArKinG#";
		
		String hashCode = null;
		
		//비밀번호 암호화
		try {
			MessageDigest md = MessageDigest.getInstance("SHA-1");
			md.reset();
			md.update(password.getBytes());
			byte[] chars = md.digest();
			
			StringBuffer sb = new StringBuffer();
			
			for(int i=0; i<chars.length; i++) {
				String tmp = Integer.toHexString(chars[i] & 0xff);
				
				if(tmp.length() == 1) {
					sb.append("0");
				}
				
				sb.append(tmp);
			}
			hashCode = sb.toString();
			
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return hashCode;
	}
	
	
}
