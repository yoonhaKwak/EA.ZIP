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
//    @RequestMapping(value = "/apilist", method = {RequestMethod.GET, RequestMethod.POST})
//    public FilterDTO ApiList(@RequestBody FilterDTO paramMap) throws SQLException,Exception {
//        //입력값 수정하기
//        log.info("############### 컨트롤러 진입 #####################");
//
//        FilterDTO filterDTO = paramMap;
//        System.out.println("addr1" + filterDTO.getAddr1());
//        System.out.println("TimeSectionMin" + filterDTO.getTimeSectionMin());
//        System.out.println("TimeSectionMax" + filterDTO.getTimeSectionMax());
//        System.out.println("WalkTimeMin" + filterDTO.getWalkTimeMin());
//        System.out.println("WalkTimeMax" + filterDTO.getWalkTimeMax());
//        System.out.println("TransferMin" + filterDTO.getTransferMin());
//        System.out.println("TransferMax" + filterDTO.getTransferMax());
//
//        return filterDTO;
//    }

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


    @GetMapping("/apilist")
    public List<HomeDTO> ApiList() throws SQLException,Exception{
        //입력값 수정하기
        int api[] = new int[3];

        // 필터링된 매물 idx 가져오기
        List<HomeDTO> idxList = service.selectIdx();
        int idx[] = new int[idxList.size()];
        for(int i=0; i<idxList.size(); i++){
            idx[i] = idxList.get(i).getIdx();
        }


        // for (int i=0; i<idx.length; i++) {

        HomeDTO homes = service.selectData(idx[0]);
        Map<String, Double> coordinate = new HashMap<String,Double>();

        // 매물의 위도경도 정보 coordinate에 입력
        coordinate.put("lat",homes.getLat());
        coordinate.put("lng",homes.getLng());

        // api 받아오기
        api = service.apiList(coordinate);

        if(api[0]*0.016<=5 & api[1]<=1 & api[2]<=45){
            //디비에 HomeDTO 저장하기
            service.insertData(service.selectData(idx[0])); // DB에 저장
            //디비에 저장하지말고 리스트에 추가해서 한번에 리턴 , 프론트로 보내기
            //    }

        }

        //HomeDTO 리스트 리턴
        return service.filtering();
    }

}