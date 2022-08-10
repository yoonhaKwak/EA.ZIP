package bit.project.eazip.service.mypage;

import bit.project.eazip.domain.home.HomeDTO;

import java.util.ArrayList;
import java.util.List;

public interface MypageService {
    public List<HomeDTO> getHistoryHome(ArrayList<String> history);

    public List<HomeDTO> getFavoriteHome(ArrayList<String> favorite);

    public String getHistoryIdx(String userId);

    public String getFavoriteIdx(String userId);

    public void updateHistoryIdx(List<String> history, String userId);
    public void updateFavoriteIdx(List<String> favorite, String userId);


}
