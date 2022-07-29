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
//    public List<FilterDTO> Filter(@RequestBody Map<String,FilterDTO>paramMap) throws SQLException,Exception{
    public List<FilterDTO> Filter(@RequestBody FilterDTO paramMap) throws SQLException,Exception{


        log.info("############### 컨트롤러 진입 #####################");
        FilterDTO filterDTO = paramMap;
        System.out.println("들어온 정보 확인");
        System.out.println("getAddr1 :" +filterDTO.getAddr1());
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
        if (filterDTO.getMaxmonthly() == 0)
        {
            homes = service.filterPrice(filterDTO);
        }
        else
        {
            homes = service.filterMonthly(filterDTO);
        }
        log.info("########## 필터링 적용하여 서비스 호출 완료 ##########");
        System.out.println(homes.size());
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
