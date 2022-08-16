package bit.project.eazip.mapper.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;
import bit.project.eazip.domain.filter.StationComparingDTO;

import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Mapper
public interface LocalMapper {
    public List<HomeDTO> selectList();

    public HomeDTO selectData(int idx);

    public HomeDTO saveData();

    public String type();

    public List<HomeDTO> filterPrice1(FilterDTO filterDTO);

    public List<HomeDTO> filterMonthly1(FilterDTO filterDTO);

    public List<HomeDTO> filterPrice2(FilterDTO filterDTO);

    public List<HomeDTO> filterMonthly2(FilterDTO filterDTO);

    public List<String> stationComparing(StationComparingDTO cDTO);

    public void insertInterStationDB(ArrayList<Map<String, String>> station);

    void insertData(HomeDTO filterDTO);

    public List<HomeDTO> filtering();

    public List<HomeDTO> selectIdx();
}
