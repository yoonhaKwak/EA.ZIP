package bit.project.eazip.controller.test;

import bit.project.eazip.domain.facilities.BusDTO;
import bit.project.eazip.service.CashingService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Log
@RestController
@CrossOrigin("*")
public class CashingController {

    @Autowired
    CashingService service;

    @RequestMapping(value = "/cashing", method = RequestMethod.POST)
    public void HistoryIdx(@RequestBody Map<String,Double> paramMap){

        Map<String, Double> temp = paramMap;
        Double dlat = temp.get("lat");
        Double dlng = temp.get("lng");

        // DB의 subway data를 가져와 list<map>형태로 로 저장
        List subwayList_temp = service.getStations("subway_tbl");
        List<Map<BusDTO, Object>> subwayList = subwayList_temp;

        // DB의 bus data를 가져와 list<map>형태로 로 저장
        List busList_temp = service.getStations("bus_tbl");
        List<Map<BusDTO, Object>> busList = busList_temp;




        // String testStr = resultList.get(4).get("name").toString();


        // 주변 역 탐색시 반경 100m로 검색하기 위한 parameter
        Double lat_gap = 0.0009000;
        Double lng_gap = 0.0011340;

//        List<Double> result_lat = new ArrayList<Double>();
//        List<Double> result_lng = new ArrayList<Double>();
        List<String> idx_list = new ArrayList<>();
        List<Double> distance_list = new ArrayList<>();

        // 파이썬의 DIC형태 DATA를 JAVA MAP을 통해 구현하려는 과정
//        List<Map<Integer, Map<Double, Double>>> distance_dict = (List<Map<Integer, Map<Double, Double>>>) new HashMap<Integer, Map<Double,Double>>();
        int scale = 4;

        for (int i = 0; i < busList.size(); i++ ){

            Double blat = Double.parseDouble(busList.get(i).get("lat").toString());
            Double blng = Double.parseDouble(busList.get(i).get("lng").toString());
            String bidx = "b" + busList.get(i).get("idx").toString();

            if ( blat < dlat + lat_gap * scale && blat > dlat - lat_gap * scale && blng < dlng + lng_gap* scale && blng > dlng - lng_gap* scale ){
                System.out.println("lat :" + blat);
                idx_list.add(bidx);
                Double distance = service.Haversine(dlat, dlng, blat, blng);
                distance_list.add(distance);
//                result_lat.add(lat);
//                result_lng.add(lng);
            }
        }

        log.info("버스데이터 처리 완료");

        scale = 6;
        for (Map<BusDTO, Object> busDTOObjectMap : subwayList) {

            double slat = Double.parseDouble(busDTOObjectMap.get("lat").toString());
            double slng = Double.parseDouble(busDTOObjectMap.get("lng").toString());
            String sidx = "s" + busDTOObjectMap.get("idx").toString();

            if (slat < dlat + lat_gap * scale && slat > dlat - lat_gap * scale && slng < dlng + lng_gap * scale && slng > dlng - lng_gap * scale) {
                System.out.println("lat :" + slat);
                idx_list.add(sidx);
                Double distance = service.Haversine(dlat, dlng, slat, slng);
                distance_list.add(distance);
//                result_lat.add(lat);
//                result_lng.add(lng);
            }
        }




        log.info("############결과값 확인##############");
        System.out.println(busList.size());
//        System.out.println(result_lat.size());
//        System.out.println(result_lat);
//        System.out.println(result_lng);
        System.out.println("bus idx :" + idx_list);
        System.out.println("distance :" + distance_list);


    }

}

