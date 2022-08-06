package bit.project.eazip.service.mypage;

import bit.project.eazip.domain.home.HomeDTO;

import java.util.ArrayList;
import java.util.List;

public interface MypageService {
    public List<HomeDTO> getHistoryHome(ArrayList<String> history);

    public List<HomeDTO> getFavoriteHome(ArrayList<String> favorite);




    public String getHistory();

    public String getFavorite();

    public void insertHistory(List<String> history);
    public void insertFavorite(List<String> favorite);


}
