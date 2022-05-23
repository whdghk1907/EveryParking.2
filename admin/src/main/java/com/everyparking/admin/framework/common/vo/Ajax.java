package com.everyparking.admin.framework.common.vo;

public interface Ajax {
    public static String SUCCESS = "S";
    public static String TYPE_SUCCESS = "success";
    public static String TYPE_FAIL = "fail";
    public static String FAIL = "F";
    public static String MASSAGE = "message";
    public static String CODE = "code";

    public interface SEARCH{
        public static String TEXT = "search";
        public static String SUCCESS = "조회에 성공하였습니다.";
        public static String FAIL = "조회에 실패하였습니다.";
    }
    public interface SAVE{
        public static String TEXT = "save";
        public static String SUCCESS = "저장에 성공하였습니다.";
        public static String FAIL = "저장에 실패하였습니다.";
    }
    public interface DELETE{
        public static String TEXT = "delete";
        public static String SUCCESS = "삭제에 성공하였습니다.";
        public static String FAIL = "삭제에 실패하였습니다.";
    }
    public interface UPDATE{
        public static String TEXT = "update";
        public static String SUCCESS = "수정에 성공하였습니다.";
        public static String FAIL = "수정에 실패하였습니다.";
    }

}
