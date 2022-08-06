package bit.project.eazip.mapper.mypage;

import org.apache.ibatis.annotations.Mapper;

import bit.project.eazip.domain.home.HomeDTO;

import java.util.ArrayList;
import java.util.List;

@Mapper
public interface MypageMapper {

    public List<HomeDTO> getHistoryHome(ArrayList<String> history);

    public List<HomeDTO> getFavoriteHome(ArrayList<String> favorite);

    public String getHistory();

    public String getFavorite();

    //    public void insertHistory(List<Integer> history);
    public void insertHistory(String temp);

    public void insertFavorite(String temp);




}
