package bit.project.eazip.controller.local;

import bit.project.eazip.domain.home.HomeDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.service.local.LocalService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.lang.Integer;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import lombok.extern.java.Log;

@Log
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
@RequestMapping("/local")
public class LocalController {
    @Autowired
    LocalService service;
    @RequestMapping(value = "/apilist", method = {RequestMethod.GET, RequestMethod.POST})
    public FilterDTO ApiList(@RequestBody FilterDTO paramMap) throws SQLException,Exception {
        //입력값 수정하기
        log.info("############### 컨트롤러 진입 #####################");

        FilterDTO filterDTO = paramMap;
        System.out.println("addr1" + filterDTO.getAddr1());
        System.out.println("TimeSectionMin" + filterDTO.getTimeSectionMin());
        System.out.println("TimeSectionMax" + filterDTO.getTimeSectionMax());
        System.out.println("WalkTimeMin" + filterDTO.getWalkTimeMin());
        System.out.println("WalkTimeMax" + filterDTO.getWalkTimeMax());
        System.out.println("TransferMin" + filterDTO.getTransferMin());
        System.out.println("TransferMax" + filterDTO.getTransferMax());

        return filterDTO;
    }

        @RequestMapping(value = "/filter", method = {RequestMethod.GET, RequestMethod.POST})
        public List<FilterDTO> Filter(@RequestBody FilterDTO paramMap) throws SQLException,Exception{


            log.info("############### 컨트롤러 진입 #####################");

            FilterDTO filterDTO = paramMap;
            System.out.println("####  들어온 정보 확인  #####");
            System.out.println("getAddr1 :" + filterDTO.getAddr1());
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
            List<FilterDTO> homes = null;

            // 월세를 0으로 지정하면, 전세 매매 대상 필터링(db의 price를 이용)
            if (filterDTO.getMaxmonthly() == 0) {
                homes = service.filterPrice(filterDTO);
            }

            // 월세가 0이 아니라면 월세 전세 매매 모두 필터링(db의 price와 monthly 모두 이용)
            else {
                homes = service.filterMonthly(filterDTO);
            }
            log.info("########## 필터링 적용하여 서비스 호출 완료 ##########");
            System.out.println(homes.size());
            return homes;
        }


}