package bit.project.eazip.controller.member;

import bit.project.eazip.domain.member.MemberDTO;
import bit.project.eazip.mapper.member.MemberMapper;
import bit.project.eazip.service.member.MemberService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;

@RequestMapping("/member")
@RestController
@Log
@CrossOrigin("*")
public class MemberController {
    @Autowired
    MemberService service;
    @RequestMapping(value = "/login", method = {RequestMethod.POST,RequestMethod.GET})
    public void login(@RequestBody Map<String,String> codeMap){
        String code = codeMap.get("code");
        log.info("############### 프론트에서 받기 #####################");
        System.out.println(code);
        String token = service.getKakaoAccessToken(code);
        Map<String,String> userMap = service.createKakaoUser(token);

        //세션
//        HttpSession session = request.getSession();
//        session.setAttribute("id", userMap.get("id"));

        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(userMap.get("id"));
        memberDTO.setEmail(userMap.get("email"));

        service.insertUser(memberDTO);
//        return session;
    }
}