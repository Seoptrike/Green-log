package com.example.domain;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

public class NoticeVO {
    private int notice_key;
    private String notice_writer;
    private String notice_title;
    private String notice_contents;
    @JsonFormat(pattern="yyyy년MM월dd일 HH:mm:ss", timezone="Asia/Seoul")
    private Date notice_regDate;
    @JsonFormat(pattern="yyyy년MM월dd일 HH:mm:ss", timezone="Asia/Seoul")
    private Date notice_uDate;
    private String notice_photo;
    
	public int getNotice_key() {
		return notice_key;
	}
	public void setNotice_key(int notice_key) {
		this.notice_key = notice_key;
	}
	public String getNotice_writer() {
		return notice_writer;
	}
	public void setNotice_writer(String notice_writer) {
		this.notice_writer = notice_writer;
	}
	public String getNotice_title() {
		return notice_title;
	}
	public void setNotice_title(String notice_title) {
		this.notice_title = notice_title;
	}
	public String getNotice_contents() {
		return notice_contents;
	}
	public void setNotice_contents(String notice_contents) {
		this.notice_contents = notice_contents;
	}
	public Date getNotice_regDate() {
		return notice_regDate;
	}
	public void setNotice_regDate(Date notice_regDate) {
		this.notice_regDate = notice_regDate;
	}
	public Date getNotice_uDate() {
		return notice_uDate;
	}
	public void setNotice_uDate(Date notice_uDate) {
		this.notice_uDate = notice_uDate;
	}
	public String getNotice_photo() {
		return notice_photo;
	}
	public void setNotice_photo(String notice_photo) {
		this.notice_photo = notice_photo;
	}
	@Override
	public String toString() {
		return "NoticeVO [notice_key=" + notice_key + ", notice_writer=" + notice_writer + ", notice_title="
				+ notice_title + ", notice_contents=" + notice_contents + ", notice_regDate=" + notice_regDate
				+ ", notice_uDate=" + notice_uDate + ", notice_photo=" + notice_photo + "]";
	}
}