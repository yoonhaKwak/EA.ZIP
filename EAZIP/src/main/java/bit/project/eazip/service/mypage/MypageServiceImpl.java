package bit.project.eazip.service.mypage;



import bit.project.eazip.domain.home.HomeDTO;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Arrays;
import java.util.List;


@Service
@Log
public class MypageServiceImpl implements MypageService{


    @Override
    public List<HomeDTO> getList() {
        return null;
    }
}
