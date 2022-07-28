package bit.project.eazip.controller.test;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.service.local.LocalService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.*;
import java.lang.Integer;

@Log
@RestController
@RequestMapping("/react")
@CrossOrigin("*")
public class ApiController {

    @Autowired
    LocalService service;

    @RequestMapping(value = "/api", method = RequestMethod.POST)
    public Map<String,String> TestApi(@RequestBody Map<String,String>paramMap) throws SQLException,Exception{
        int walk;
        int bus,subway;
        int min;
        int idx;
        int arr [] = new int[100]; //동적배열은 속도가 떨어지고 메모리 관리도 비효율적
        log.info("TestApi 시작");
        System.out.println(paramMap);
        Map<String,String> testApi = paramMap;

        walk = Integer.parseInt(testApi.get("totalWalk"));
        bus = Integer.parseInt(testApi.get("busTransitCount"));
        subway = Integer.parseInt(testApi.get("subwayTransitCount"));
        min =Integer.parseInt(testApi.get("totalTime"));
        idx = Integer.parseInt(testApi.get("idx"));

        if (walk*0.016 <= 20 & (bus+subway-1) <= 2 & min <= 50){
            System.out.println(idx);
            HomeDTO homeDTO = service.selectData(idx);
            System.out.println(homeDTO);
        }

        return testApi;
        //프론트에서 api 불러와서 값을 받음
    }

    @GetMapping("/coordinate")
    public List<HomeDTO> Lng() {
        List<HomeDTO> homeDTO= service.selectList();

        return homeDTO;
    }

    @RequestMapping(value = "/filter", method = {RequestMethod.GET, RequestMethod.POST})
    public List<FilterDTO> Filter(@RequestBody Map<String,String>paramMap) throws SQLException,Exception{

        log.info("############### 진입 #####################");

//        String[] type;
//        String[] category1;
//        String[] room_number;


        String type;
        String category1;
        String room_number;


        String op1;
        String op2;
        String op3;

        int map;
        int mip;
        int mam;
        int mim;



        log.info("############### 프론트 데이터 받아 백에서 정의 작업시작 #####################");
        Map<String,String> options = paramMap;

        System.out.println(options.get("type"));
        type = options.get("type");
        System.out.println(type);
//        type = Arrays.stream(options.get("type").split(","))
//                .map(String::trim)
//                .toArray(String[]::new);

        System.out.println(options.get("category"));
        category1 = options.get("category");
        System.out.println("category1 :" +  category1);
//        category1 = Arrays.stream(options.get("category").split(","))
//                .map(String::trim)
//                .toArray(String[]::new);

        System.out.println(options.get("room"));
        room_number = options.get("room");
        System.out.println("room_number :" + room_number);
//        room_number = Arrays.stream(options.get("room").split(","))
//                .map(String::trim)
//                .toArray(String[]::new);


        log.info("################### 값 제대로 가져오는지 확인");
//        System.out.println(Arrays.stream(type).toList().get(0));

        op1 = options.get("op1");
        op2 = options.get("op2");
        op3 = options.get("op3");


        map = Integer.parseInt(options.get("map"));
        System.out.println("map :"  + map);
        mip = Integer.parseInt(options.get("mip"));
        System.out.println("mip :"  + mip);
        mam = Integer.parseInt(options.get("mam"));
        System.out.println("mam :"  + mam);
        mim = Integer.parseInt(options.get("mim"));
        System.out.println("mim :"  + mim);

        log.info("############### 프론트 데이터 받아 백에서 정의 완료 #####################");



        FilterDTO filterDTO = new FilterDTO();



        filterDTO.setType(type);

        filterDTO.setCategory1(category1);
        filterDTO.setRoom_number(room_number);

        filterDTO.setOp1(op1);
        filterDTO.setOp2(op2);
        filterDTO.setOp3(op3);

        filterDTO.setMaxprice(map);
        filterDTO.setMinprice(mip);
        filterDTO.setMaxmonthly(mam);
        filterDTO.setMinmonthly(mim);

        List<FilterDTO> homes = null;

        log.info("########## 필터링 적용하여 서비스 호출 작업 시작 ##########");

        log.info("#######################################3");
        System.out.println(filterDTO.getMaxmonthly());
        log.info("#######################################3");

        if (filterDTO.getMaxmonthly() == 0)
        {
            homes = service.filterPrice(filterDTO);
        }
        else
        {
            homes = service.filterMonthly(filterDTO);
        }
        log.info("########## 필터링 적용하여 서비스 호출 완료 ##########");

        System.out.println(homes);
        return homes;
    }





    @GetMapping("/filtering")
    public List<HomeDTO> Filtering(){
        return service.filtering();
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


        //    }

        }
        List<HomeDTO> homeDTOList = service.filtering();


        //HomeDTO 리스트 리턴
        return homeDTOList;


    }
    @GetMapping("/dataList")
    public List<HomeDTO> DataList(){
        List<HomeDTO> homeDTO = service.selectList();
        return homeDTO;
    }


}
