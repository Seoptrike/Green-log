package com.example.domain;

public class DiaryPhotoVO {
	private int diaryPhoto_key;
	private int diaryPhoto_diary_key;
	private String diaryPhoto_filename;
	public int getDiaryPhoto_key() {
		return diaryPhoto_key;
	}
	public void setDiaryPhoto_key(int diaryPhoto_key) {
		this.diaryPhoto_key = diaryPhoto_key;
	}
	public int getDiaryPhoto_diary_key() {
		return diaryPhoto_diary_key;
	}
	public void setDiaryPhoto_diary_key(int diaryPhoto_diary_key) {
		this.diaryPhoto_diary_key = diaryPhoto_diary_key;
	}
	public String getDiaryPhoto_filename() {
		return diaryPhoto_filename;
	}
	public void setDiaryPhoto_filename(String diaryPhoto_filename) {
		this.diaryPhoto_filename = diaryPhoto_filename;
	}
	@Override
	public String toString() {
		return "DiaryPhotoVO [diaryPhoto_key=" + diaryPhoto_key + ", diaryPhoto_diary_key=" + diaryPhoto_diary_key
				+ ", diaryPhoto_filename=" + diaryPhoto_filename + "]";
	}
	
}