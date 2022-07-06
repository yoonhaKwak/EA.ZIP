package bit.project.eazip.controller;

import bit.project.eazip.domain.SampleDTO;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;
@Log
@RestController
@RequestMapping("/react")
public class MainController {

    @RequestMapping(value = "/api", method = RequestMethod.POST)
    public Map<String,String> TestApi(@RequestBody Map<String,String>paramMap) throws SQLException,Exception{
        String walk;
        String bus,subway;
        String min;
        log.info("TestApi 시작");
        System.out.println(paramMap);
        Map<String,String> testApi = paramMap;

        System.out.print("도보거리 : "+testApi.get("totalWalk")+"m");
        bus = testApi.get("busTransitCount");
        subway = testApi.get("subwayTransitCount");

        System.out.print("     버스 탑승횟수 : "+bus+"회");
        System.out.print("     지하철 탑승횟수 : "+subway+"회");
        min =testApi.get("totalTime");
        System.out.println("     소요시간 : "+min+"분");

        testApi.put("Data","YES");
        return testApi;
    }
}
