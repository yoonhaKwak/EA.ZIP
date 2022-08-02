package bit.project.eazip.controller.local;

import bit.project.eazip.domain.home.HomeDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.service.local.LocalService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RequestMapping("/local")
public class LocalController {
    @Autowired
    LocalService service;
    @RequestMapping(value = "/apilist", method = {RequestMethod.GET, RequestMethod.POST})
    public List<HomeDTO> ApiList(Map<String,Integer>paramMap) throws SQLException,Exception{
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

}