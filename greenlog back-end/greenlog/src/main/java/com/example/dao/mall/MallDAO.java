package com.example.dao.mall;

import java.util.HashMap;
import java.util.List;

import com.example.domain.MallPhotoVO;
import com.example.domain.MallVO;
import com.example.domain.QueryVO;

public interface MallDAO {
	//리스트(+셀러물품들),리드(+사진만+셀러정보),업데이트,딜리트
	
	public List<HashMap<String, Object>> list (QueryVO vo);
	
	
	public void insert (MallVO vo);
	public void insert (MallPhotoVO pvo);
}