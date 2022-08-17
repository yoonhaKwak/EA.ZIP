package bit.project.eazip.mapper.mypage;

import org.apache.ibatis.annotations.Mapper;

import bit.project.eazip.domain.home.HomeDTO;

import java.util.ArrayList;
import java.util.List;

@Mapper
public interface MypageMapper {

    public List<HomeDTO> getHistoryHome1(ArrayList<String> history);

    public List<HomeDTO> getFavoriteHome1(ArrayList<String> favorite);
    public List<HomeDTO> getHistoryHome2(ArrayList<String> history);

    public List<HomeDTO> getFavoriteHome2(ArrayList<String> favorite);

    public String getHistoryIdx(String userId);

    public String getFavoriteIdx(String userId);

    //    public void insertHistory(List<Integer> history);
    public void updateHistoryIdx(String temp, String userId);

    public void updateFavoriteIdx(String temp, String userId);


}
