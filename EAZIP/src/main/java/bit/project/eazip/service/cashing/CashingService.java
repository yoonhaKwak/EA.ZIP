package bit.project.eazip.service.cashing;

import bit.project.eazip.domain.facilities.BusDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public interface CashingService {

//    public List<Double> getStations(Double dlat, Double dlng);

    public List<BusDTO> getStations(String station);

    public Map<String, List<Map<String, String>>> NearFacility(Map<String, Double> paramMap);

    public ArrayList<String> NearStation(Map<String, Double> paramMap);

    public Double Haversine(Double dlat, Double dlng, Double lat, Double lng);


}
