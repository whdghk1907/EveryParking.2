package com.everyparking.admin.framework.common.vo;

import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Timestamp;
import java.util.Date;

public class MemberVo {
	private int USER_SEQ;
	private String USER_TYPE;
	private String USER_MAIL;
	private String USER_PW;
	private String USER_NAME;
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date USER_BIRTH;
	private Timestamp REG_DATE;
	private String USER_CAR_NO;
	private int MOD_SEQ;
	private Timestamp MOD_DATE;
	private String NOTE;
	
	public MemberVo() {
		super();
	}

	public MemberVo(int uSER_SEQ, String uSER_TYPE, String uSER_MAIL, String uSER_PW, String uSER_NAME, Date uSER_BIRTH,
                    Timestamp rEG_DATE, String uSER_CAR_NO, int mOD_SEQ, Timestamp mOD_DATE, String nOTE) {
		super();
		USER_SEQ = uSER_SEQ;
		USER_TYPE = uSER_TYPE;
		USER_MAIL = uSER_MAIL;
		USER_PW = uSER_PW;
		USER_NAME = uSER_NAME;
		USER_BIRTH = uSER_BIRTH;
		REG_DATE = rEG_DATE;
		USER_CAR_NO = uSER_CAR_NO;
		MOD_SEQ = mOD_SEQ;
		MOD_DATE = mOD_DATE;
		NOTE = nOTE;
	}

	public int getUSER_SEQ() {
		return USER_SEQ;
	}

	public void setUSER_SEQ(int uSER_SEQ) {
		USER_SEQ = uSER_SEQ;
	}

	public String getUSER_TYPE() {
		return USER_TYPE;
	}

	public void setUSER_TYPE(String uSER_TYPE) {
		USER_TYPE = uSER_TYPE;
	}

	public String getUSER_MAIL() {
		return USER_MAIL;
	}

	public void setUSER_MAIL(String uSER_MAIL) {
		USER_MAIL = uSER_MAIL;
	}

	public String getUSER_PW() {
		return USER_PW;
	}

	public void setUSER_PW(String uSER_PW) {
		USER_PW = uSER_PW;
	}

	public String getUSER_NAME() {
		return USER_NAME;
	}

	public void setUSER_NAME(String uSER_NAME) {
		USER_NAME = uSER_NAME;
	}

	public Date getUSER_BIRTH() {
		return USER_BIRTH;
	}

	public void setUSER_BIRTH(Date uSER_BIRTH) {
		USER_BIRTH = uSER_BIRTH;
	}

	public Timestamp getREG_DATE() {
		return REG_DATE;
	}

	public void setREG_DATE(Timestamp rEG_DATE) {
		REG_DATE = rEG_DATE;
	}

	public String getUSER_CAR_NO() {
		return USER_CAR_NO;
	}

	public void setUSER_CAR_NO(String uSER_CAR_NO) {
		USER_CAR_NO = uSER_CAR_NO;
	}

	public int getMOD_SEQ() {
		return MOD_SEQ;
	}

	public void setMOD_SEQ(int mOD_SEQ) {
		MOD_SEQ = mOD_SEQ;
	}

	public Timestamp getMOD_DATE() {
		return MOD_DATE;
	}

	public void setMOD_DATE(Timestamp mOD_DATE) {
		MOD_DATE = mOD_DATE;
	}

	public String getNOTE() {
		return NOTE;
	}

	public void setNOTE(String nOTE) {
		NOTE = nOTE;
	}
	
	
}
