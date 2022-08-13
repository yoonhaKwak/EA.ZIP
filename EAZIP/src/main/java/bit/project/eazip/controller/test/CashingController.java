package bit.project.eazip.controller.test;

import bit.project.eazip.domain.facilities.NearDTO;
import bit.project.eazip.service.CashingService;
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
        Double dlat = temp.get("lat");
        Double dlng = temp.get("lng");

        log.info(String.valueOf(dlat));


        String[] facilityList = new String[10];
        facilityList[0] = "bogun_tbl";
        facilityList[1] = "cafe_tbl";
        facilityList[2] = "cctv_tbl";
        facilityList[3] = "ddar_tbl";
        facilityList[4] = "hospital_tbl";
        facilityList[5] = "laundary_tbl";
        facilityList[6] = "market_tbl";
        facilityList[7] = "office_tbl";
        facilityList[8] = "post_tbl";
        facilityList[9] = "bank_tbl";

        Map<String, List<Map<String, String>>> facilities_result = new HashMap<>();
        List<Double> distance_list = new ArrayList<>();

        for (int i = 0; i < facilityList.length; i++) {
            List subwayList_temp = service.getStations(facilityList[i]);
            List<Map<NearDTO, Object>> tempList = subwayList_temp;
            List<Map<String, String>> facilities = new ArrayList<>();

            // 주변 역 탐색시 반경 100m로 검색하기 위한 parameter
            Double lat_gap = 0.0009000;
            Double lng_gap = 0.0011340;

            int scale = 7;

//            for (Map<NearDTO, Object> busDTOObjectMap : tempList)
            for (int j = 0; j < tempList.size(); j++) {
                Map<String, String> name_lat_lng = new HashMap<>();
                String name = (String) tempList.get(j).get("name");
                Double slat = Double.parseDouble(tempList.get(j).get("lat").toString());
                Double slng = Double.parseDouble(tempList.get(j).get("lng").toString());

                if (slat < dlat + lat_gap * scale && slat > dlat - lat_gap * scale && slng < dlng + lng_gap * scale && slng > dlng - lng_gap * scale) {
                    name_lat_lng.put("name", name);
                    name_lat_lng.put("lat", slat.toString());
                    name_lat_lng.put("lng", slng.toString());


                    facilities.add(name_lat_lng);
                    Double distance = service.Haversine(dlat, dlng, slat, slng);
                    distance_list.add(distance);
                }
            }
            facilities_result.put(facilityList[i], facilities );
        }

        System.out.println(facilities_result);
        return facilities_result;
    }




//    @RequestMapping(value ="/nearStation", method = {RequestMethod.GET,RequestMethod.POST})
//    public List<Map<String, String>>> NearStation(@RequestBody Map<String,Double> paramMap){
//        Map<String, Double> temp = paramMap;
//        Double dlat = temp.get("lat");
//        Double dlng = temp.get("lng");
//
//        String[] facilityList = new String[2];
//        facilityList[0] = "bus_tbl";
//        facilityList[1] = "subway_tbl";
//
//        Map<String, List<Map<String, String>>> facilities_result = new HashMap<>();
//        List<Double> distance_list = new ArrayList<>();
//        List<Map<String, String>> facilities = new ArrayList<>();
//
//        for (int i = 0; i < facilityList.length; i ++) {
//            List subwayList_temp = service.getStations(facilityList[i]);
//            List<Map<NearDTO, Object>> tempList = subwayList_temp;
//
//            // 주변 역 탐색시 반경 100m로 검색하기 위한 parameter
//            Double lat_gap = 0.0009000;
//            Double lng_gap = 0.0011340;
//
//            int scale = 4;
//
////            for (Map<NearDTO, Object> busDTOObjectMap : tempList)
//            for (int j = 0; j < tempList.size(); j++){
//                Map<String, String> name_lat_lng = new HashMap<>();
//                String name = (String) tempList.get(j).get("name");
//                Double slat = Double.parseDouble(tempList.get(j).get("lat").toString());
//                Double slng = Double.parseDouble(tempList.get(j).get("lng").toString());
//
//                if (slat < dlat + lat_gap * scale && slat > dlat - lat_gap * scale && slng < dlng + lng_gap * scale && slng > dlng - lng_gap * scale) {
//                    name_lat_lng.put("name", name);
//                    name_lat_lng.put("lat", slat.toString());
//                    name_lat_lng.put("lng", slng.toString());
//                    facilities.add(name_lat_lng);
//                    Double distance = service.Haversine(dlat, dlng, slat, slng);
//                    distance_list.add(distance);
//                }
//            }
//        }
//        System.out.println(facilities_result);
//        return ;
//    }
}

