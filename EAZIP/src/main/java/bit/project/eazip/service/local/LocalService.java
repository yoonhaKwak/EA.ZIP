package bit.project.eazip.service.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.domain.filter.StationComparingDTO;

import java.util.List;
import java.util.Map;

public interface LocalService {
    public List<HomeDTO> selectList();

    public HomeDTO selectData(int idx);

    public HomeDTO saveData();
    public String type();

    public List<HomeDTO> filterPrice1(FilterDTO filterDTO);

    public List<HomeDTO> filterMonthly1(FilterDTO filterDTO);

    public List<HomeDTO> filterPrice2(FilterDTO filterDTO);

    public List<HomeDTO> filterMonthly2(FilterDTO filterDTO);

    public List<String> stationComparing(StationComparingDTO cDTO);

    public List<String> onlystationComparing(StationComparingDTO cDTO);

    void insertData(HomeDTO filterDTO);

    public List<HomeDTO> filtering();

    public int[] localApi(Map<String,Double> coordinate);
    public List<HomeDTO> selectIdx();


}
