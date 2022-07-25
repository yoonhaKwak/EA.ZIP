package bit.project.eazip.service.home;


import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.mapper.home.HomeMapper;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.Arrays;
import java.util.List;


@Service
@Log
public class HomeServiceImpl implements HomeService{

    Integer[] arr = {28827383, 28827607 ,28828599 ,28828612 ,28828982 ,28829048 ,28829064 ,28829203 ,28829278 ,28829856 ,28832654 ,28832723};
//    List<Integer> list = Arrays.asList(arr);
    @Autowired
    HomeMapper homeListMapper;

    @Override
    public List<HomeDTO> getList() {
        log.info("service imple 진입");
//        System.out.println(list);
        return homeListMapper.getList(arr);
    }
}
