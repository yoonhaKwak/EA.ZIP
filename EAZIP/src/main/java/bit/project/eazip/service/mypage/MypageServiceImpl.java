package bit.project.eazip.service.mypage;



import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.mapper.mypage.MypageMapper;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service
@Log
public class MypageServiceImpl implements MypageService{

    Integer[] arr = {28827383, 28827607 ,28828599 ,28828612 ,28828982 ,28829048 ,28829064 ,28829203 ,28829278 ,28829856 ,28832654 ,28832723};
    //    List<Integer> list = Arrays.asList(arr);
    @Autowired
    MypageMapper mypageMapper;

    @Override
    public List<HomeDTO> getHistoryHome(ArrayList<String> history) {
        log.info("service imple, getHistoryHome() 서비스 실행");
        return mypageMapper.getHistoryHome(history);
    }

    @Override
    public List<HomeDTO> getFavoriteHome(ArrayList<String> favorite) {
        log.info("service imple, getFavoriteHome() 서비스 실행");
        return mypageMapper.getFavoriteHome(favorite);
    }

    @Override
    public String getHistoryIdx(String userId){
        log.info("service inple, getIdx() 서비스 실행");
        return mypageMapper.getHistoryIdx(userId);
    }

    @Override
    public String getFavoriteIdx(String userId){
        log.info("service inple, getIdx() 서비스 실행");
        return mypageMapper.getFavoriteIdx(userId);
    }


    @Override
    public void updateHistoryIdx(List<String> history, String userId){

        log.info("service imple, insertFavorite() 서비스 실행");
        String temp = history.toString();
        temp = temp.replace("[","");
        temp = temp.replace("]","");

        String id = "2361494735";
        mypageMapper.updateHistoryIdx(temp, userId);
    }


    public void updateFavoriteIdx(List<String> favorite, String userId){

        log.info("service imple, insertFavorite() 서비스 실행");
        String temp = favorite.toString();
        temp = temp.replace("[","");
        temp = temp.replace("]","");
        mypageMapper.updateFavoriteIdx(temp, userId);
    }


}
