package bit.project.eazip.controller.mypage;


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

    @RequestMapping(value = "/mypage", method = RequestMethod.POST)
    public Map<String,String> MypageIdx(@RequestBody Map<String,String> paramMap){
        int idx;
        log.info("프론트에서 백으로 인덱스 받아 옴");
        Map<String,String> temp = paramMap;
        idx = Integer.parseInt(temp.get("idx"));


        return temp;

    }

    @GetMapping("/getlist")
    public List<HomeDTO> GetList() {
        log.info("MypageController 집입");
        List<HomeDTO> home = service.getList();

        return home;


    }
}
