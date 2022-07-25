package bit.project.eazip.mapper.home;

import org.apache.ibatis.annotations.Mapper;

import bit.project.eazip.domain.home.HomeDTO;
import java.util.List;


@Mapper
public interface HomeMapper {

    public List<HomeDTO> getList(Integer[] arr);
}
