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
@RequestMapping("/mypage")
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
public class MypageController {

    @Autowired
    MypageService service;

//    int id;
//    String name;
//
//    public void Product(int id, String name){
//        this.id = id;
//        this.name = name;
//    }
//
//    @Override
//    public boolean equals(Object obj){
//        Product product = (Product) object;
//
//    }



    @RequestMapping(value = "/history", method = RequestMethod.POST)
    public void HistoryIdx(@RequestBody Map<String,String> paramMap){
        // ###########################################
        log.info("프론트에서 백으로 인덱스 받아 옴");

        // 백엔드 기존 최근본매물 리스트 가져오기, db로의 입출력을 String형태를 통해 하도록 코딩해둠
        /////// 로그인유지 완료시 사용자정보 인자로 넣어줘야 함 ///////
        String temp = service.getHistory();
        System.out.println("new idx :" + paramMap.get("idx"));


        //################## 배열로 바꾸는 과정 ######################
        //###### 문자열을 , 기준 자르고 string[]로 만듦
        temp = temp.replace("[", "");
        temp = temp.replace("]", "");
        temp = temp.replaceAll(" ", "");
        String[] strArr = temp.split(",");

        //###### string[]를 ArrayList로 바꿈
        ArrayList<String> history  = new ArrayList<String>(Arrays.asList(strArr));
        //#########################################################


        //처음 값이 입력되는 경우 초기값 삭제
        if (history.get(0).equals("")) {
            log.info("초기값 '' 제거");
            System.out.println("history :"+ history.get(0));
            history.remove(0);
        }

        //###### 프론트에서 넘어온 새로운 '최근본매물 idx' 중복 확인 및 추가
        // 중복값 존재시 삭제
        if(history.contains(paramMap.get("idx"))) {
            log.info("중복값 존재");
            history.remove(paramMap.get("idx"));
            log.info("중복값 제거 완료");
        }
        // 중복값 없으면 추가
        else {
            log.info("중복값 없음");
            history.add(paramMap.get("idx"));
            log.info("idx 추가 완료");
        }

        
        // 최근본 매물이 20개가 넘어가면 가장먼저 본 것부터 지워나감
        if(history.size() == 21) {
            history.remove(0);
        }

        System.out.println("history :" + history);
        System.out.println("history size :" + history.size());
        service.insertHistory(history);
    }

    @RequestMapping(value = "/favorite", method = RequestMethod.POST)
    public void FavoriteIdx(@RequestBody Map<String,String> paramMap){
        // ###########################################
        log.info("프론트에서 백으로 인덱스 받아 옴");
        
        // 백엔드 기존 찜 리스트 가져오기, db로의 입출력을 String형태를 통해 하도록 코딩해둠
        /////// 로그인유지 완료시 사용자정보 인자로 넣어줘야 함 ///////
        String temp = service.getFavorite();
        
        //################## 배열로 바꾸는 과정 ######################
        //###### 문자열을 , 기준 자르고 string[]로 만듦
        temp = temp.replace("[", "");
        temp = temp.replace("]", "");
        temp = temp.replaceAll(" ", "");
        String[] strArr = temp.split(",");
        //###### string[]를 ArrayList로 바꿈
        ArrayList<String> favorite  = new ArrayList<String>(Arrays.asList(strArr));
        //#########################################################

        //처음 값이 입력되는 경우 초기값 0 삭제
        if (favorite.get(0).equals("")) {
            System.out.println("favorite :"+ favorite.get(0));
            favorite.remove(0);
        }

        //###### 프론트에서 넘어온 새로운 '찜 idx' 중복 확인 및 추가
        // 중복값 존재시 삭제
        if(favorite.contains(paramMap.get("idx"))) {
            log.info("중복값 존재");
            favorite.remove(paramMap.get("idx"));
            log.info("중복값 제거 완료");
        }
        // 중복값 없으면 추가
        else {
            log.info("중복값 없음");
            favorite.add(paramMap.get("idx"));
            log.info("idx 추가 완료");
        }


        // 찜이 20개가 넘어가면 가장먼저 본 것부터 지워나감
        if(favorite.size() == 51) {
            favorite.remove(0);
        }

        System.out.println(favorite);
        System.out.println("favorite size :" + favorite.size());

        service.insertFavorite(favorite);
    }



    @GetMapping("/gethistory")
    public List<HomeDTO> GetHistory() {
        log.info("MypageController 집입");

        String temp = service.getHistory();

        // 가져온 String형태의 idx를 ArrayList로 바꿈
        temp = temp.replace("[", "");
        temp = temp.replace("]", "");
        String[] strArr = temp.split(",");
        ArrayList<String> history = new ArrayList<String>(Arrays.asList(strArr));


        // ArrayList형태의 idx를 통해 매물 가져오기
        List<HomeDTO> home = service.getHistoryHome(history);

        log.info("데이터 불러와보기");
        System.out.println(home.get(0));
        return home;
    }



    @GetMapping("/getfavorite")
    public List<HomeDTO> GetFavorite() {
        log.info("MypageController 집입");

        String temp = service.getFavorite();

        // 가져온 String형태의 idx를 ArrayList로 바꿈
        temp = temp.replace("[", "");
        temp = temp.replace("]", "");
        String[] strArr = temp.split(",");
        ArrayList<String> favorite = new ArrayList<String>(Arrays.asList(strArr));


        // ArrayList형태의 idx를 통해 매물 가져오기
        List<HomeDTO> home = service.getFavoriteHome(favorite);

        log.info("데이터 불러와보기");
        System.out.println(home.get(0));
        return home;
    }

}
