package bit.project.eazip.controller.test;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.service.local.LocalService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @RequestMapping(value = "/filter", method = {RequestMethod.GET,RequestMethod.POST})
    public List<HomeDTO> Filter(@RequestBody Map<String,String>paramMap) throws SQLException,Exception{

        int price,type, room;
        String category;
        Map<String,String> options = paramMap;
        System.out.println(options);

        price = Integer.parseInt(options.get("price"));
        category = options.get("category");
        type = Integer.parseInt(options.get("type"));
        room =Integer.parseInt(options.get("room"));

        HomeDTO filterDTO = new HomeDTO();

        filterDTO.setPrice((double)price);
        if (category == "빌라"){
            filterDTO.setCategory1("빌라/연립");
        } else {filterDTO.setCategory1(category);}
        filterDTO.setType((double) type);
        filterDTO.setRoom_number((double) room);
        System.out.println(filterDTO);
        List<HomeDTO> homes = service.filterData(filterDTO);
        service.insertData(filterDTO);
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
