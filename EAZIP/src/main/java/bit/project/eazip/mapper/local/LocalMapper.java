package bit.project.eazip.mapper.local;

import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.home.FilterDTO;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface LocalMapper {
    public List<HomeDTO> selectList();

    public HomeDTO selectData(int idx);

    public HomeDTO saveData();
    public String type();

    public List<FilterDTO> filterPrice(FilterDTO filterDTO);

    public List<FilterDTO> filterMonthly(FilterDTO filterDTO);

    void insertData(HomeDTO filterDTO);

    public List<HomeDTO> filtering();

    public List<String> apiList(Map<String,String> coordinate);

    public List<HomeDTO> selectIdx();
}
