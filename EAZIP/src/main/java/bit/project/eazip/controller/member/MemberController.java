package bit.project.eazip.controller.member;

import bit.project.eazip.domain.member.MemberDTO;
import bit.project.eazip.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/member")
@RestController
@Log
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
public class MemberController {
    @Autowired
    MemberService service;

    @Autowired
    HttpSession session;

    @RequestMapping(value = "/login", method = {RequestMethod.POST, RequestMethod.GET})
    public Map<String, String> login(@RequestBody Map<String, String> codeMap) {
        String code = codeMap.get("code");
        System.out.println(code);
        String token = service.getKakaoAccessToken(code);
        Map<String, String> userMap = service.createKakaoUser(token);
        log.info("====================");
        //세션
//        HttpSession session = request.getSession();
//        session.setAttribute("id", userMap.get("id"));

        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(userMap.get("id"));
        memberDTO.setEmail(userMap.get("email"));
        service.insertUser(memberDTO);
//        session = request.getSession();
//        session.setAttribute("access_token", token);

        log.info("--------------------------");
        Map<String, String> User = new HashMap<>();
        User.put("userId", memberDTO.getId());
        User.put("token", token);
        System.out.println(User);
//        log.info((String) session.getAttribute("access_token"));
//        log.info(session.getId());

        return User;
    }

    @RequestMapping(value ="/logout", method = {RequestMethod.GET,RequestMethod.POST})
    public int logout(@RequestBody Map<String, String> userToken) {
        String requrl = "https://kapi.kakao.com/v1/user/logout";

        String token = userToken.get("token");
        log.info(token);
        int responseCode;
        try {
            URL url = new URL(requrl);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token); //전송할 header 작성, access_token전송

            responseCode = conn.getResponseCode();
            System.out.println("responseCode : " + responseCode);


        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return responseCode;
    }

}
