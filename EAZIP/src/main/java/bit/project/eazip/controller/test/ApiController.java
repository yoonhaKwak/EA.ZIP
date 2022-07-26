package bit.project.eazip.controller.test;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.service.local.LocalService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.lang.Integer;
import java.util.Objects;

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

        int type;
        String category1;
        int room_number;

//        int op1;
//        int op2;
//        int op3;

        int map;
        int mip;
        int mam;
        int mim;



        ///////////////////////////////
        // 프론트 데이터 백에서 받아 정의
        ///////////////////////////////
        log.info("############### 프론트 데이터 받아 백에서 정의 작업시작 #####################");
        Map<String,String> options = paramMap;

        type = Integer.parseInt(options.get("type"));
        category1 = options.get("category");
        room_number =Integer.parseInt(options.get("room"));

//        op1 = Integer.parseInt(options.get("op1"));
//        op2 = Integer.parseInt(options.get("op2"));
//        op3 = Integer.parseInt(options.get("op3"));

        map = Integer.parseInt(options.get("map"));
        mip = Integer.parseInt(options.get("mip"));
        mam = Integer.parseInt(options.get("mam"));
        mim = Integer.parseInt(options.get("mim"));


        log.info("############### 프론트 데이터 받아 백에서 정의 완료 #####################");



        FilterDTO filterDTO = new FilterDTO();


        filterDTO.setType(type);
        if (Objects.equals(category1, "빌라")){
            filterDTO.setCategory1("빌라/연립");
        } else {filterDTO.setCategory1(category1);}
        filterDTO.setRoom_number(room_number);

//        filterDTO.setOp1(op1);
//        filterDTO.setOp2(op2);
//        filterDTO.setOp3(op3);

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
        List<HomeDTO> idxList = service.selectIdx();
        int idx[] = new int[idxList.size()];
        for(int i=0; i<idxList.size(); i++){
            idx[i] = idxList.get(i).getIdx();
        }
        for (int i=0; i<idx.length; i++) {
            HomeDTO homes = service.selectData(idx[i]);
            Map<String, Double> coordinate = new HashMap<String,Double>();

            coordinate.put("lat",homes.getLat());
            coordinate.put("lng",homes.getLng());

            // api 받아오기
            api = service.apiList(coordinate);

            if(api[0]*0.016<=5 & api[1]<=1 & api[2]<=45){
                //디비에 HomeDTO 저장하기
                service.insertData(service.selectData(idx[i]));
            }

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
