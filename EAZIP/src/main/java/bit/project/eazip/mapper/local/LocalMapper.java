package bit.project.eazip.mapper.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;

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

    public List<HomeDTO> filterPrice(FilterDTO filterDTO);

    public List<HomeDTO> filterMonthly(FilterDTO filterDTO);

    public void insertInterStationDB(ArrayList<String[]> station);


    void insertData(HomeDTO filterDTO);

    public List<HomeDTO> filtering();

    public List<HomeDTO> selectIdx();
}
