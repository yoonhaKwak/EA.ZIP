package bit.project.eazip.service.mypage;

import bit.project.eazip.domain.home.HomeDTO;

import java.util.List;

public interface MypageService {
    public List<HomeDTO> getList();

    public List<String> getIdx();

    public void insertHistory(List<String> history);
}
