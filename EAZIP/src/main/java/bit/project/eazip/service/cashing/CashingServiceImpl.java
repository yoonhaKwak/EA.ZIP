package bit.project.eazip.service.cashing;


import bit.project.eazip.domain.facilities.BusDTO;
import bit.project.eazip.domain.facilities.NearDTO;
import bit.project.eazip.mapper.cashing.CashingMapper;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
@Log
public class CashingServiceImpl implements CashingService {

    @Autowired
    CashingMapper cashingMapper;

    @Override
    public List<BusDTO> getStations(String station) {
        log.info("impl진입");
        return cashingMapper.getStations(station);
    }

    @Override
    public Double Haversine(Double dlat, Double dlng, Double lat, Double lng) {
        final double R = 6372.8; // In kilometers

        double dLat = Math.toRadians(lat - dlat);
        double dLon = Math.toRadians(lng - dlng);
        dlat = Math.toRadians(dlat);
        lat = Math.toRadians(lat);

        double a = Math.pow(Math.sin(dLat / 2), 2) + Math.pow(Math.sin(dLon / 2), 2) * Math.cos(dlat) * Math.cos(lat);
        double c = 2 * Math.asin(Math.sqrt(a));
        return R * c;

    }



    @Override
    public Map<String, List<Map<String, String>>> NearFacility(Map<String, Double> paramMap) {

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
        Map<String, Double> temp = paramMap;
        Double dlat = temp.get("lat");
        Double dlng = temp.get("lng");

        for (int i = 0; i < facilityList.length; i++) {
            List subwayList_temp = cashingMapper.getStations(facilityList[i]);
            List<Map<NearDTO, Object>> tempList = subwayList_temp;

            // 주변 역 탐색시 반경 100m로 검색하기 위한 parameter
            Double lat_gap = 0.0009000;
            Double lng_gap = 0.0011340;

            int scale = 7;
            List<Map<String, String>> facilities = new ArrayList<>();

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
//                    Double distance = Haversine(dlat, dlng, slat, slng);
//                    distance_list.add(distance);
                }
            }
            facilities_result.put(facilityList[i], facilities);
        }

        return facilities_result;
    }



    @Override
    public List<Map<NearDTO, Object>> CallStation(String station) {

        return (List<Map<NearDTO, Object>>) (List) cashingMapper.getStations(station);
    }

    @Override
    public ArrayList<String> NearStation(Map<String, Double> paramMap, List<Map<NearDTO, Object>> subway, List<Map<NearDTO, Object>> bus, Integer walk) {

        Double dlat = paramMap.get("lat");
        Double dlng = paramMap.get("lng");

        List<Double> distance_list = new ArrayList<>();
        ArrayList<String> stations = new ArrayList<>();


        Double scale = Math.min(walk * 0.55 , 7);
        List<Map<NearDTO, Object>> tempList = bus;
        for (int i = 0; i < 2; i++) {

            // 주변 역 탐색시 반경 100m로 검색하기 위한 parameter
            Double lat_gap = 0.0009000;
            Double lng_gap = 0.0011340;

            if (i == 1) {
                scale += 1 ;
                tempList = subway;
            }
            for (int j = 0; j < tempList.size(); j++) {
                Long idx = Long.parseLong(tempList.get(j).get("idx").toString());
                Double slat = Double.parseDouble(tempList.get(j).get("lat").toString());
                Double slng = Double.parseDouble(tempList.get(j).get("lng").toString());

                if (slat < dlat + lat_gap * scale && slat > dlat - lat_gap * scale && slng < dlng + lng_gap * scale && slng > dlng - lng_gap * scale) {
                    stations.add(idx.toString());

//                    Double distance = Haversine(dlat, dlng, slat, slng);
//                    distance_list.add(distance);
                }
            }



        }
//        System.out.println(distance_list);
        return stations;
    }


























//    @Override
//    public int[] apiList(Map<String,Double> coordinate) {
//        Double lat,lng;
//        lat = coordinate.get("lat");
//        lng = coordinate.get("lng");
//        String line = null;
//        int apiList[] = new int[3];
//        String uri = "https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX="+lng+"&EY="+lat+"&apiKey=j7A34MnqbWGfZQwWtVRUtqkal9YXPsGl%2BQGMho8v2ag";
////        List<String> walk = new ArrayList<String>();
////        List<String> bus = new ArrayList<String>();
////        List<String> subway = new ArrayList<String>();
////        List<String> time = new ArrayList<String>();
//
//        try{
//            URL url = new URL(uri);
//            URLConnection conn = url.openConnection();
//
//            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(),"UTF-8"));
//            log.info("api");
//            line = br.readLine();
//            JSONParser jsonParser = new JSONParser();
//            JSONObject obj = (JSONObject)jsonParser.parse(line);
//            JSONObject result = (JSONObject) obj.get("result");
//            JSONArray path = (JSONArray) result.get("path");// is null 이라고 뜸
//            JSONObject info = (JSONObject)path.get(0);
//            info = (JSONObject)info.get("info");
//
////            for(int i = 0; i<info.length(); i++){
////                walk.add((String) info.get("totalWalk"));
////                bus.add((String) info.get("busTransitCount"));
////                subway.add((String) info.get("subwayTransitCount"));
////                time.add((String) info.get("totalTime"));
////            }
//
//            int transit = Integer.parseInt(info.get("busTransitCount").toString()) + Integer.parseInt(info.get("subwayTransitCount").toString());
//            apiList[0] = Integer.parseInt(info.get("totalWalk").toString());  //도보거리
//            apiList[1] = transit;   //환승횟수
//            apiList[2] = Integer.parseInt(info.get("totalTime").toString());  //소요시간
//
//
//        } catch (ParseException | IOException e) {
//            throw new RuntimeException(e);
//        } catch (NullPointerException e){
//            log.info(line);
//        }
//        return apiList;
//    }

}





