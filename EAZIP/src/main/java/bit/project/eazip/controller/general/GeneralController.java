package bit.project.eazip.controller.general;

import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.domain.home.HomeDTO;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import bit.project.eazip.service.local.LocalService;



import java.sql.SQLException;
import java.util.Calendar;
import java.util.List;

@RequestMapping("/general")
@Log
@RestController
@CrossOrigin(origins = "http://3.34.152.8:3000",allowCredentials = "true")
public class GeneralController {

    @Autowired
    LocalService service;

    @RequestMapping(value = "/filter", method = {RequestMethod.GET, RequestMethod.POST})
    public List<HomeDTO> Filter(@RequestBody FilterDTO paramMap) throws SQLException,Exception{
        Calendar cal = Calendar.getInstance();
        log.info("############### 컨트롤러 진입 #####################");

        FilterDTO filterDTO = paramMap;
        System.out.println("####  들어온 정보 확인  #####");
        System.out.println("getType :" + filterDTO.getType());
        System.out.println("getCategory1 :" + filterDTO.getCategory1());
        System.out.println("getRoom_number :" + filterDTO.getRoom_number());
        System.out.println("getOp1 :" + filterDTO.getOp1());
        System.out.println("getOp2 :" + filterDTO.getOp2());
        System.out.println("getOp3 :" + filterDTO.getOp3());

        System.out.println("getMaxprice :" + filterDTO.getMaxprice());
        System.out.println("getMinprice :" + filterDTO.getMinprice());
        System.out.println("getMaxmonthly :" + filterDTO.getMaxmonthly());
        System.out.println("getMinmonthly :" + filterDTO.getMinmonthly());

        log.info("########## 들어온 정보 적용하여 서비스 호출 작업 시작 ##########");
        List<HomeDTO> HomeList = null;
        if(cal.get(Calendar.DAY_OF_WEEK) % 2 ==0)
        {// 월세를 0으로 지정하면, 전세 매매 대상 필터링(db의 price를 이용)
            if (filterDTO.getMaxmonthly() == 0) {
                HomeList = service.filterPrice1(filterDTO);
            }

            // 월세가 0이 아니라면 월세 전세 매매 모두 필터링(db의 price와 monthly 모두 이용)
            else {
                HomeList = service.filterMonthly1(filterDTO);
            }
        }
        else {
            if (filterDTO.getMaxmonthly() == 0) {
                HomeList = service.filterPrice2(filterDTO);
            }

            // 월세가 0이 아니라면 월세 전세 매매 모두 필터링(db의 price와 monthly 모두 이용)
            else {
                HomeList = service.filterMonthly2(filterDTO);
            }
        }
        log.info("########## 필터링 적용하여 서비스 호출 완료 ##########");
        System.out.println(HomeList.size());
        return HomeList;
    }
}
