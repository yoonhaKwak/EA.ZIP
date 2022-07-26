package bit.project.eazip.service;


import bit.project.eazip.domain.facilities.BusDTO;
import bit.project.eazip.mapper.CashingMapper;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


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





