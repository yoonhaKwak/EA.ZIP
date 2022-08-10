package bit.project.eazip.service.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;
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
import java.util.HashMap;
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
    public List<FilterDTO> filterPrice(FilterDTO filterDTO) {
        log.info("############################");
        log.info("서비스 임플, filterPrice 실행");
        log.info("############################");
        return localMapper.filterPrice(filterDTO);
    }

    @Override
    public List<FilterDTO> filterMonthly(FilterDTO filterDTO) {
        log.info("############################");
        log.info("서비스 임플, filterMonthly 실행");
        log.info("############################");
        return localMapper.filterMonthly(filterDTO);
    }



    @Override
    public void insertData(HomeDTO homeDTO) {
        log.info("############################");
        log.info("서비스 임플, insertData 실행");
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
            log.info("여기 진행 됨");
            apiList[0] = Integer.parseInt(info.get("totalWalk").toString());  //도보거리
            apiList[1] = transit;   //환승횟수
            apiList[2] = Integer.parseInt(info.get("totalTime").toString());  //소요시간




//            Cashing 코드
            log.info("############## 캐싱 테스트 시작 ###################" );
            // path.size() 베이스 for문 시작 부분

            Map<String, Map> pathmap = new HashMap<>();
            Map<String, String> interStation = new HashMap<String,String>();

            //path[i]가 목적지까지 가는 여러 경로 중 하나임
            log.info("path size :" +String.valueOf(path.size()));
            for (int i = 0 ; i < path.size(); i++) {

                // path[i] 불러오기
                JSONObject temppath = (JSONObject) path.get(i);

                // path[i].subpath 불러오기
                JSONArray subpath = (JSONArray) temppath.get("subPath");

                // 각 subpath마다 역간 경로 저장할 맵 정의
                Map<String, String> subpathmap = new HashMap<String, String>();
                // subpath[j]가 총 경로 안에서 각각의 환승 경로임
//                for (int j = 0; j < subpath.size(); j++) {
//                    JSONObject tempsubpath = (JSONObject) subpath.get(j);
//                    if (Integer.parseInt(tempsubpath.get("trafficType").toString()) == 1)
//                    {
//                        subpathmap.put(new String("startID") +j , "s" + tempsubpath.get("startID").toString());
//                        subpathmap.put(new String("endID") + j , "s" + tempsubpath.get("endID").toString());
//                        subpathmap.put(new String("")+j+0+j+1, tempsubpath.get("sectionTime").toString());
//                        interStation.put(subpathmap.get("startID"+j )+","+subpathmap.get("endID"+j), tempsubpath.get("sectionTime").toString()+","+0+","+0);
//
//                    }
//                    else if (Integer.parseInt(tempsubpath.get("trafficType").toString()) == 2)
//                    {
////                        subpathmap.put(new String("startID") +j , "b" + tempsubpath.get("startArsID").toString().replace("-",""));
////                        subpathmap.put(new String("endID") + j, "b" + tempsubpath.get("endArsID").toString().replace("-",""));
//                        subpathmap.put(new String("startID") +j , "b" + tempsubpath.get("startLocalStationID").toString());
//                        subpathmap.put(new String("endID") + j, "b" + tempsubpath.get("endLocalStationID").toString());
//                        subpathmap.put(new String("")+j+0+j+1, tempsubpath.get("sectionTime").toString());
//                        interStation.put(subpathmap.get("startID"+j )+","+subpathmap.get("endID"+j), tempsubpath.get("sectionTime").toString()+","+0+","+0);
//
//                    }
//                    else
//                    {
//                        subpathmap.put(new String("startID") +j , "");
//                        subpathmap.put(new String("endID") + j, "");
//                        subpathmap.put(new String("")+j+0+j+1, tempsubpath.get("sectionTime").toString());
//                    }
//                }
                for (int j = 0; j < subpath.size(); j++) {
                    JSONObject tempsubpath = (JSONObject) subpath.get(j);
                    if (Integer.parseInt(tempsubpath.get("trafficType").toString()) == 1)
                    {
                        subpathmap.put(new String("startID") +j , "" + tempsubpath.get("startID").toString());
                        subpathmap.put(new String("endID") + j , "" + tempsubpath.get("endID").toString());
                        subpathmap.put(new String("")+j+0+j+1, tempsubpath.get("sectionTime").toString());
                        interStation.put(subpathmap.get("startID"+j )+", "+subpathmap.get("endID"+j), tempsubpath.get("sectionTime").toString()+","+0+","+0);

                    }
                    else if (Integer.parseInt(tempsubpath.get("trafficType").toString()) == 2)
                    {
//                        subpathmap.put(new String("startID") +j , "b" + tempsubpath.get("startArsID").toString().replace("-",""));
//                        subpathmap.put(new String("endID") + j, "b" + tempsubpath.get("endArsID").toString().replace("-",""));
                        subpathmap.put(new String("startID") +j , "" + tempsubpath.get("startLocalStationID").toString());
                        subpathmap.put(new String("endID") + j, "" + tempsubpath.get("endLocalStationID").toString());
                        subpathmap.put(new String("")+j+0+j+1, tempsubpath.get("sectionTime").toString());
                        interStation.put(subpathmap.get("startID"+j )+", "+subpathmap.get("endID"+j), tempsubpath.get("sectionTime").toString()+","+0+","+0);

                    }
                    else
                    {
                        subpathmap.put(new String("startID") +j , "");
                        subpathmap.put(new String("endID") + j, "");
                        subpathmap.put(new String("")+j+0+j+1, tempsubpath.get("sectionTime").toString());
                    }
                }
                // API 데이터의 모든 역 간 경우의 수 상정하여 소요시간 체크
                // k = 1 , k= 2, k =3
//                Integer temp;
//                for (int k =0; k <subpath.size(); k++)
//                {
//                    for (int l =0; l<= k; l++) {
//                        if (k == l  || subpathmap.get("startID" + l).isBlank() || subpathmap.get("endID" + k).isBlank() ){
//                            continue;
//                        }
//                        temp = 0;
//                        for (int m =l+1; m< k; m++) {
//                            temp += Integer.parseInt(subpathmap.get(""+m+0+m+1));
//                        }
//                        subpathmap.put(new String("") + l+1 + k+0, (temp.toString()));
//
//                        temp += Integer.parseInt(subpathmap.get(""+l+0+l+1));
//                        subpathmap.put(new String("") + l+0 + k+0, temp.toString());
//
//                        temp += Integer.parseInt(subpathmap.get(""+k+0+k+1));
//                        subpathmap.put(new String("") + l+0 + k+1, (temp.toString()));
//
//                        temp -= Integer.parseInt(subpathmap.get(""+l+0+l+1));
//                        subpathmap.put(new String("") + l+1 + k+1, (temp.toString()));
//                    }
//                }
//                pathmap.put("path"+i, subpathmap);
//            }
//            System.out.println(pathmap);
//            Cashing 코드
                int temp;
                int temp_walk;
                int trans;
                for (int k =0; k <subpath.size(); k++)
                {
                    for (int l =0; l<= k; l++) {
                        if (k == l  || subpathmap.get("startID" + l).isBlank() || subpathmap.get("endID" + k).isBlank() ){
                            continue;
                        }
                        temp = 0;
                        trans = 0;
                        for (int m =l+1; m< k; m++) {
                            temp += Integer.parseInt(subpathmap.get(""+m+0+m+1));
                            trans += 1;
                        }
                        temp_walk=0;
                        for (int m =l; m< k; m++) {
                            if(m%2 == 0){
                                temp_walk += Integer.parseInt(subpathmap.get(""+(m)+0+(m)+1));
                            }
                        }
                        interStation.put(subpathmap.get("endID"+l )+", "+subpathmap.get("startID"+k), temp +"," + temp_walk+ ","+ (Math.max(trans - 2, 0)));

                        temp += Integer.parseInt(subpathmap.get(""+l+0+l+1));
                        interStation.put(subpathmap.get("startID"+l)+", "+subpathmap.get("startID"+k), temp +","+ temp_walk+ ","+ (trans-1));

                        temp += Integer.parseInt(subpathmap.get(""+k+0+k+1));
                        interStation.put(subpathmap.get("startID"+l)+", "+subpathmap.get("endID"+k), temp +","+ temp_walk+ ","+ (trans));

                        temp -= Integer.parseInt(subpathmap.get(""+l+0+l+1));
                        interStation.put(subpathmap.get("endID"+l)+", "+subpathmap.get("endID"+k), temp +"," + temp_walk+ ","+ (trans-1));
                    }
                }
                pathmap.put("path"+i, subpathmap);
            }
            System.out.println(interStation);
            System.out.println("size : "+interStation.size());




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
