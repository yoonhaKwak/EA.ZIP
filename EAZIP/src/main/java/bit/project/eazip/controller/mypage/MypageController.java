package bit.project.eazip.controller.mypage;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.service.mypage.MypageService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@Log
@RestController
@CrossOrigin("*")
public class MypageController {

    @Autowired
    MypageService service;

    @RequestMapping(value = "/history", method = RequestMethod.POST)
    public void HistoryIdx(@RequestBody Map<String,String> paramMap){
        String idx;
        // ###########################################
        log.info("프론트에서 백으로 인덱스 받아 옴");
        Map<String,String> temp = paramMap;

//        idx = Integer.parseInt(temp.get("idx"));
        idx =temp.get("idx");

        System.out.println("idx = " + idx);

        List<String> history = new ArrayList<String>();
        history = service.getIdx();
        log.info("###########################################");
        log.info("Idx 받아 옴");
        log.info("###########################################");
        history.add(idx);
        log.info("###########################################");
        log.info("리스트 인덱스로 검색가능한지 확인");
        System.out.println(history);


        //################## 배열로 바꾸는 과정 ######################
        String test = history.toString();
        String[] list = Arrays.stream(test.split(","))
                .map(String::trim)
                .toArray(String[]::new);
        log.info("###########################################");
        long amount = Arrays.stream(list).count();
        log.info("배열의 길이" + " : "+ amount);
        //#########################################################

        service.insertHistory(history);
    }


    @RequestMapping(value = "/favorite", method = RequestMethod.POST)
    public void FavoriteIdx(@RequestBody Map<String,String> paramMap){
        String idx;
        // ###########################################
        log.info("프론트에서 백으로 인덱스 받아 옴");
        Map<String,String> temp = paramMap;

//        idx = Integer.parseInt(temp.get("idx"));
        idx =temp.get("idx");

        System.out.println("idx = " + idx);

        List<String> history = new ArrayList<String>();
        history = service.getIdx();
        log.info("###########################################");
        log.info("Idx 받아 옴");
        log.info("###########################################");
        history.add(idx);
        log.info("###########################################");
        log.info("리스트 인덱스로 검색가능한지 확인");
        System.out.println(history);


        //################## 배열로 바꾸는 과정 ######################
        String test = history.toString();
        String[] list = Arrays.stream(test.split(","))
                .map(String::trim)
                .toArray(String[]::new);
        log.info("###########################################");
        long amount = Arrays.stream(list).count();
        log.info("배열의 길이" + " : "+ amount);
        //#########################################################

        service.insertHistory(history);
    }



    @GetMapping("/getlist")
    public List<HomeDTO> GetList() {
        log.info("MypageController 집입");
        List<HomeDTO> home = service.getList();
        log.info("데이터 불러와보기");
        System.out.println(home.get(0));
        return home;


    }
}
