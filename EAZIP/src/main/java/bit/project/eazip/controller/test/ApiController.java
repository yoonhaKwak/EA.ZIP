package bit.project.eazip.controller.test;

import bit.project.eazip.domain.SampleDTO;
import bit.project.eazip.service.SampleService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.Map;
@Log
@RestController
@RequestMapping("/react")
@CrossOrigin("*")
public class ApiController {

    @Autowired
    SampleService service;

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


        return testApi;
    }

    @GetMapping("/lat")
    public Double Lat() {
        SampleDTO dto = service.selectData();
        Double lat = dto.getLat();

        return lat;
    }

    @GetMapping("/lng")
    public Double Lng() {
        SampleDTO dto = service.selectData();
        Double lng = dto.getLng();

        return lng;
    }

//    @RequestMapping(value = "/List", method = {RequestMethod.POST,RequestMethod.GET})
//    public List<SampleDTO> TestList(@RequestBody Map<String,Integer>paramMap) throws SQLException,Exception{
//        int walk;
//        int bus,subway,transit;
//        int min;
//        SampleDTO dto = service.selectData();
//
//        Double lat = dto.getLat();
//        Double lng = dto.getLng();
//
//        log.info("TestList 시작");
//        System.out.println(paramMap);
//        Map<String,Integer> testApi = paramMap;
//
//        walk = testApi.get("totalWalk");
//        bus = testApi.get("busTransitCount");
//        subway = testApi.get("subwayTransitCount");
//        transit = bus + subway -1;
//        min =testApi.get("totalTime");
//
//
//        return service.selectList();
//
//        //리턴을 리스트로
//    }

}
