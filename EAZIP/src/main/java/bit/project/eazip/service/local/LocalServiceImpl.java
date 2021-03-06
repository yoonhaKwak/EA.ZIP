package bit.project.eazip.service.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.mapper.local.LocalMapper;
import com.fasterxml.jackson.annotation.JsonValue;
import lombok.extern.java.Log;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Supplier;

@Service
@Log
public class LocalServiceImpl implements LocalService {

    @Autowired
    LocalMapper localMapper;
    @Override
    public List<HomeDTO> selectList() {
        log.info("리스트 리스트!");
        return localMapper.selectList();
    }

    @Override
    public HomeDTO selectData(int idx) {

        return localMapper.selectData(idx);
    }

    @Override
    public HomeDTO saveData() {
        return localMapper.saveData();
    }

    @Override
    public String type() {
        return localMapper.type();
    }

    @Override
    public List<HomeDTO> filterData(HomeDTO filterDTO) {
        return localMapper.filterData(filterDTO);
    }

    @Override
    public void insertData(HomeDTO homeDTO) {
        log.info("insertData");
        localMapper.insertData(homeDTO);
    }

    @Override
    public List<HomeDTO> filtering() {
        return localMapper.filtering();
    }


    @Override
    public int[] apiList(Map<String,Double> coordinate) {
        Double lat,lng;
        lat = coordinate.get("lat");
        lng = coordinate.get("lng");
        String line = null;
        int apiList[] = new int[3];
        String uri = "https://api.odsay.com/v1/api/searchPubTransPath?SX=126.9027279&SY=37.5349277&EX="+lng+"&EY="+lat+"&apiKey=j7A34MnqbWGfZQwWtVRUtqkal9YXPsGl%2BQGMho8v2ag";
//        List<String> walk = new ArrayList<String>();
//        List<String> bus = new ArrayList<String>();
//        List<String> subway = new ArrayList<String>();
//        List<String> time = new ArrayList<String>();

        try{
            URL url = new URL(uri);
            URLConnection conn = url.openConnection();

            BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream(),"UTF-8"));
            log.info("api");
            line = br.readLine();
            JSONParser jsonParser = new JSONParser();
            JSONObject obj = (JSONObject)jsonParser.parse(line);
            JSONObject result = (JSONObject) obj.get("result");
            JSONArray path = (JSONArray) result.get("path");// is null 이라고 뜸
            JSONObject info = (JSONObject)path.get(0);
            info = (JSONObject)info.get("info");

//            for(int i = 0; i<info.length(); i++){
//                walk.add((String) info.get("totalWalk"));
//                bus.add((String) info.get("busTransitCount"));
//                subway.add((String) info.get("subwayTransitCount"));
//                time.add((String) info.get("totalTime"));
//            }

            int transit = Integer.parseInt(info.get("busTransitCount").toString()) + Integer.parseInt(info.get("subwayTransitCount").toString());
            apiList[0] = Integer.parseInt(info.get("totalWalk").toString());  //도보거리
            apiList[1] = transit;   //환승횟수
            apiList[2] = Integer.parseInt(info.get("totalTime").toString());  //소요시간


        } catch (ParseException | IOException e) {
            throw new RuntimeException(e);
        } catch (NullPointerException e){
            log.info(line);
        }
        return apiList;
    }

    @Override
    public List<HomeDTO> selectIdx() {
        return localMapper.selectIdx();
    }
}
