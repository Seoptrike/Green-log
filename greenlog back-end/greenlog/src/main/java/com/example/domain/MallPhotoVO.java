package com.example.domain;

public class MallPhotoVO {
	private int mallPhoto_key ;
	private int mallPhoto_mall_key;
	private String mallPhoto_photo;
	
	public int getMallPhoto_key() {
		return mallPhoto_key;
	}
	public void setMallPhoto_key(int mallPhoto_key) {
		this.mallPhoto_key = mallPhoto_key;
	}
	public int getMallPhoto_mall_key() {
		return mallPhoto_mall_key;
	}
	public void setMallPhoto_mall_key(int mallPhoto_mall_key) {
		this.mallPhoto_mall_key = mallPhoto_mall_key;
	}
	public String getMallPhoto_photo() {
		return mallPhoto_photo;
	}
	public void setMallPhoto_photo(String mallPhoto_photo) {
		this.mallPhoto_photo = mallPhoto_photo;
	}
	@Override
	public String toString() {
		return "MallPhotoVO [mallPhoto_key=" + mallPhoto_key + ", mallPhoto_mall_key=" + mallPhoto_mall_key
				+ ", mallPhoto_photo=" + mallPhoto_photo + "]";
	}
	
	
}