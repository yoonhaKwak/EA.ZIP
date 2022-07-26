package bit.project.eazip.service.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;


import java.util.List;
import java.util.Map;

public interface LocalService {
    public List<HomeDTO> selectList();

    public HomeDTO selectData(int idx);

    public HomeDTO saveData();
    public String type();

    public List<FilterDTO> filterPrice(FilterDTO filterDTO);

    public List<FilterDTO> filterMonthly(FilterDTO filterDTO);




    void insertData(HomeDTO filterDTO);

    public List<HomeDTO> filtering();

    public int[] apiList(Map<String,Double> coordinate);
    public List<HomeDTO> selectIdx();
}
