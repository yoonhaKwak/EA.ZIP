package bit.project.eazip.service.member;

import bit.project.eazip.domain.member.MemberDTO;
import org.springframework.stereotype.Service;

import java.lang.reflect.Member;
import java.util.Map;


public interface MemberService {
    public String getKakaoAccessToken(String code);

    public Map<String, String> createKakaoUser(String token);

    public void insertUser(MemberDTO memberDTO);
}
