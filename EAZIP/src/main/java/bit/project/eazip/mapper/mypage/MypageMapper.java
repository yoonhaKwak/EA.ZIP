package bit.project.eazip.mapper.mypage;

import org.apache.ibatis.annotations.Mapper;

import bit.project.eazip.domain.home.HomeDTO;
import java.util.List;

@Mapper
public interface MypageMapper {

    public List<HomeDTO> getList(Integer[] arr);

    public List<String> getIdx();

    //    public void insertHistory(List<Integer> history);
    public void insertHistory(String temp);



}
