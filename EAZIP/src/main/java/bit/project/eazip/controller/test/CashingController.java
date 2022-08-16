package bit.project.eazip.controller.test;

import bit.project.eazip.domain.facilities.NearDTO;
import bit.project.eazip.service.cashing.CashingService;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Log
@RestController
@RequestMapping("/cash")
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
public class CashingController {

    @Autowired
    CashingService service;

    @RequestMapping(value = "/cashing", method = {RequestMethod.GET, RequestMethod.POST})
    public Map<String, List<Map<String, String>>> NearFacility(@RequestBody Map<String, Double> paramMap) {
        Map<String, Double> temp = paramMap;

        Map<String, List<Map<String, String>>> facilities_result = service.NearFacility(temp);

        System.out.println(facilities_result);
        return facilities_result;
    }


    @RequestMapping(value ="/nearStation", method = {RequestMethod.GET,RequestMethod.POST})
    public ArrayList<String> NearStation(@RequestBody Map<String,Double> paramMap){
        Map<String, Double> temp = paramMap;

        ArrayList<String> stations =service.NearStation(temp);
        System.out.println(stations);
        return stations;
    }
}

