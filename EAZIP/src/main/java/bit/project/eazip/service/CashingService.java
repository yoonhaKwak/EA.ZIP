package bit.project.eazip.service;

import bit.project.eazip.domain.facilities.BusDTO;

import java.util.List;

public interface CashingService {

//    public List<Double> getStations(Double dlat, Double dlng);

    public List<BusDTO> getStations(String station);

    public Double Haversine(Double dlat, Double dlng, Double lat, Double lng);
}
