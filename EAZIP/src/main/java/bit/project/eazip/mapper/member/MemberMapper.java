package bit.project.eazip.mapper.member;

import bit.project.eazip.domain.member.MemberDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface MemberMapper {
    public void insertUser(MemberDTO memberDTO);
}
