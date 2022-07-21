package bit.project.eazip.mapper;

import bit.project.eazip.domain.SampleDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
@Mapper
public interface SampleMapper {
    public SampleDTO selectData();

    public List<SampleDTO> selectList();

    List<Double> selectLat();

    List<Double> selectLng();
}
