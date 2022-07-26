package bit.project.eazip.mapper;

import bit.project.eazip.domain.facilities.BusDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;


@Mapper
public interface CashingMapper {

    public List<BusDTO> getStations(String station);
}
