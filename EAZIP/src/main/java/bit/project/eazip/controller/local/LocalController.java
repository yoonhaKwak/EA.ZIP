package bit.project.eazip.controller.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.filter.StationComparingDTO;

import org.springframework.web.bind.annotation.RequestMapping;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.service.local.LocalService;
import bit.project.eazip.service.cashing.CashingService;

import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
@RequestMapping("/local")
public class LocalController {
    @Autowired
    LocalService service;

    @Autowired
    CashingService cashing_service;

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
    public List<HomeDTO> Filter(@RequestBody FilterDTO paramMap) throws SQLException,Exception {
        int[] api = new int[3];
        Calendar cal = Calendar.getInstance();

        long start_ALL = System.currentTimeMillis();


        log.info("############### 컨트롤러 진입 #####################");

        System.out.println("####  들어온 정보 확인  #####");
        System.out.println("getD_lat :" + paramMap.getD_lat());
        System.out.println("getD_lng :" + paramMap.getD_lng());

        System.out.println("getType :" + paramMap.getType());
        System.out.println("getCategory1 :" + paramMap.getCategory1());
        System.out.println("getRoom_number :" + paramMap.getRoom_number());
        System.out.println("getOp1 :" + paramMap.getOp1());
        System.out.println("getOp2 :" + paramMap.getOp2());
        System.out.println("getOp3 :" + paramMap.getOp3());
        System.out.println("getMaxprice :" + paramMap.getMaxprice());
        System.out.println("getMinprice :" + paramMap.getMinprice());
        System.out.println("getMaxmonthly :" + paramMap.getMaxmonthly());
        System.out.println("getMinmonthly :" + paramMap.getMinmonthly());

        System.out.println("getTimeSectionMax : " + paramMap.getTimeSectionMax());
        System.out.println("getTimeSectionMin : " + paramMap.getTimeSectionMin());
        System.out.println("getWalkTimeMax : " + paramMap.getWalkTimeMax());
        System.out.println("getWalkTimeMin : " + paramMap.getWalkTimeMin());
        System.out.println("getTransferMax : " + paramMap.getTransferMax());
        System.out.println("getTransferMin : " + paramMap.getTransferMin());

        List<HomeDTO> HomeList = null;

        if(cal.get(Calendar.DAY_OF_WEEK) % 2 ==0)
        { // 월세를 0으로 지정하면, 전세 매매 대상 필터링(db의 price를 이용)
            if (paramMap.getMaxmonthly() == 0) {
                HomeList = service.filterPrice1(paramMap);
            }

            // 월세가 0이 아니라면 월세 전세 매매 모두 필터링(db의 price와 monthly 모두 이용)
            else {
                HomeList = service.filterMonthly1(paramMap);
            }
        }

        else {
            // 월세를 0으로 지정하면, 전세 매매 대상 필터링(db의 price를 이용)
            if (paramMap.getMaxmonthly() == 0) {
                HomeList = service.filterPrice2(paramMap);
            }

            // 월세가 0이 아니라면 월세 전세 매매 모두 필터링(db의 price와 monthly 모두 이용)
            else {
                HomeList = service.filterMonthly2(paramMap);
            }

        }
        System.out.println("filter_size : " + HomeList.size());

        int[] idx = new int[HomeList.size()];

        for (int i = 0; i < HomeList.size(); i++) {
            idx[i] = HomeList.get(i).getIdx();
        }

        List<HomeDTO> resultList = new ArrayList<>();
        Map<String,Double> dMap = new HashMap<>();
        dMap.put("lat", paramMap.getD_lat());
        dMap.put("lng", paramMap.getD_lng());

        ArrayList<String> dstation = cashing_service.NearStation(dMap);

        System.out.println("dstation : ");
        System.out.println(dstation);
        int caseNumber = 0;
        int APInumber = 0;



        for (int i : idx) {
            caseNumber += 1;

            long start = System.currentTimeMillis();
            HomeDTO homes = service.selectData(i);
            Map<String, Double> coordinate = new HashMap<>();

            // 매물의 위도경도 정보 coordinate에 입력
            coordinate.put("lat", homes.getLat());
            coordinate.put("lng", homes.getLng());

            //목적지 위도, 경도
            coordinate.put("d_lat", paramMap.getD_lat());
            coordinate.put("d_lng", paramMap.getD_lng());

            // DB에서 목적지, 매물 주변역 매칭 확인하는 부분
            // 매물과 목적지 좌표받을 변수 선언 및 값 입력
            Map<String,Double> hMap = new HashMap<>();
            hMap.put("lat", homes.getLat());
            hMap.put("lng", homes.getLng());

            // 매물과 목적지 좌표값을 통해 주변역 Idx를 ArrayList로 받고 transComparingDTO에 입력
            StationComparingDTO cDTO = new StationComparingDTO();
            ArrayList<String> hstation = cashing_service.NearStation(hMap);
            System.out.println("#########################################");
            System.out.println("hstation : " );
            System.out.println(hstation);



            cDTO.setStation1(hstation);
            cDTO.setStation2(dstation);
            cDTO.setTimeSectionMax(paramMap.getTimeSectionMax());
            cDTO.setTimeSectionMin(paramMap.getTimeSectionMin());
            cDTO.setWalkTimeMax(paramMap.getWalkTimeMax());
            cDTO.setWalkTimeMin(paramMap.getWalkTimeMin());
            cDTO.setTransferMax(paramMap.getTransferMax());
            cDTO.setTransferMin(paramMap.getTransferMin());


            List<String> result = service.onlystationComparing(cDTO);
//            System.out.println("only station comparing result :" + result);

//            List<String> result = service.stationComparing(cDTO);
//            System.out.println("station comparing result :" + result);


            long end = System.currentTimeMillis();

            System.out.println("cost time : " + (end - start)/1000.0);

            long start2 = System.currentTimeMillis();


            // DB에 역정보가 하나도 없는 경우 -> 바로 API
            if(result.isEmpty()) {
                log.info("case1");
                api = service.localApi(coordinate);
                Thread.sleep(300);
                if ((api[0] * 0.016 <= paramMap.getWalkTimeMax() & api[0] * 0.016 >= paramMap.getWalkTimeMin()) &
                        (api[1] <= paramMap.getTransferMax() & api[1] >= paramMap.getTransferMin()) &
                        (api[2] <= paramMap.getTimeSectionMax() & api[2] >= paramMap.getTimeSectionMin())) {
                    resultList.add(homes);
                    APInumber += 1;
                    log.info("case number : " + caseNumber + " API사용 수 : " + APInumber ) ;

                }
            }

            // DB에 역정보가 모두 있는 경우 -> 교통정보필터링
//            else if (result.size() == hstation.size() * dstation.size() ) {
//                log.info("################### 모든 경우의 수 DB에 저장 되어있음 ##################");
//                List<String> having_all_case_result = service.stationComparing(cDTO);
//
//                // 교통정보필터링 결과 묶이는 역이 없는 경우 -> API사용
//                if (having_all_case_result.isEmpty()) {
//                    continue;
//                    }
//                else {
//                    resultList.add(homes);
//                }
//            }



            else if (result.size() > 50 ) {
                log.info("case2");
                log.info("################### 상당수의 경로가 DB에 저장되어있음 ##################");
                List<String> having_over50_case_result = service.stationComparing(cDTO);
                System.out.println("result : "+ having_over50_case_result);
                // 교통정보필터링 결과 묶이는 역이 없는 경우 -> API사용
                if (having_over50_case_result.isEmpty()) {
                    continue;
                }
                else {
                    resultList.add(homes);
                }
            }


            // DB에 역정보가 적당히 있는 경우 -> 교통정보 필터링
            else {
                log.info("case3");
                List<String> having_some_case_result = service.stationComparing(cDTO);
                System.out.println("result : "+ having_some_case_result);

                // 교통정보필터링 결과 묶이는 역이 없는 경우 -> API사용
                if (having_some_case_result.isEmpty()) {
                    api = service.localApi(coordinate);
                    Thread.sleep(300);
                    if ((api[0] * 0.016 <= paramMap.getWalkTimeMax() & api[0] * 0.016 >= paramMap.getWalkTimeMin()) &
                            (api[1] <= paramMap.getTransferMax() & api[1] >= paramMap.getTransferMin()) &
                            (api[2] <= paramMap.getTimeSectionMax() & api[2] >= paramMap.getTimeSectionMin())) {
                        resultList.add(homes);
                        APInumber += 1;
                        log.info("case number : " + caseNumber + " API사용 수 : " + APInumber ) ;
                    } else {
                        resultList.add(homes);
                    }
                }
            }

            long end2 = System.currentTimeMillis();
            System.out.println("cost time2 : " + (end2 - start2)/1000.0);
            System.out.println("#########################################################################");
            }

        long end_ALL = System.currentTimeMillis();
        System.out.println("total cost time : " + (end_ALL - start_ALL)/1000.0);
        return resultList;
    }

//    @GetMapping("/apilist")
//    public List<HomeDTO> ApiList() throws SQLException,Exception{
//        //입력값 수정하기
//        int api[] = new int[3];
//        // 필터링된 매물 idx 가져오기
//        List<HomeDTO> idxList = service.selectIdx();
//        int idx[] = new int[idxList.size()];
//        for(int i=0; i<idxList.size(); i++){
//            idx[i] = idxList.get(i).getIdx();
//        }
//        // for (int i=0; i<idx.length; i++) {
//
//        HomeDTO homes = service.selectData(idx[0]);
//        Map<String, Double> coordinate = new HashMap<String,Double>();
//
//        // 매물의 위도경도 정보 coordinate에 입력
//        coordinate.put("lat",homes.getLat());
//        coordinate.put("lng",homes.getLng());
//
//        // api 받아오기
//        api = service.localApi(coordinate);
//
//        if(api[0]*0.016<=5 & api[1]<=1 & api[2]<=45){
//            //디비에 HomeDTO 저장하기
//            service.insertData(service.selectData(idx[0])); // DB에 저장
//            //디비에 저장하지말고 리스트에 추가해서 한번에 리턴 , 프론트로 보내기
//            //    }
//
//        }
//
//        //HomeDTO 리스트 리턴
//        return service.filtering();
//    }

}