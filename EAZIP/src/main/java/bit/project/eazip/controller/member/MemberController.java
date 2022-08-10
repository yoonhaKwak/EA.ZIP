package bit.project.eazip.controller.member;

import bit.project.eazip.domain.member.MemberDTO;
import bit.project.eazip.service.member.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@RequestMapping("/member")
@RestController
@Log
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
public class MemberController {
    @Autowired
    MemberService service;

    @RequestMapping(value = "/login", method = {RequestMethod.POST,RequestMethod.GET})
    public Map<String,String> login(@RequestBody Map<String,String> codeMap){
        String code = codeMap.get("code");
        log.info("############### 프론트에서 받기 #####################");
        System.out.println(code);
        String token = service.getKakaoAccessToken(code);
        Map<String,String> userMap = service.createKakaoUser(token);
        log.info("====================");
        //세션
//        HttpSession session = request.getSession();
//        session.setAttribute("id", userMap.get("id"));

        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(userMap.get("id"));
        memberDTO.setEmail(userMap.get("email"));
        service.insertUser(memberDTO);

        log.info("--------------------------");
        Map<String,String> UserId = new HashMap<>();
        UserId.put("userId",memberDTO.getId());
        System.out.println(UserId);
        return UserId;
    }

    @GetMapping("/logout")
    public void logout(HttpSession session){
        session.invalidate();
    }

//    @PostMapping(value = "/getAccessToken")
//    public ResponseEntity issueToken(
//            // @RequestHeader(value = "Authorization") String accessTokenRequest,
//            @CookieValue(value = HttpHeaders.SET_COOKIE) Cookie refreshCookie
//    ) {
//        ResponseEntity responseEntity = null;
//        try{
//            String refreshToken = tokenProvider.resolveToken(refreshCookie.getValue());
//            // String oldAccessToken = tokenProvider.resolveToken(accessTokenRequest);
//
//            // 유저 권한 저장 들어있는 컬렉션
//            Collection<? extends GrantedAuthority> accessTokenAuthoriryCollection = tokenProvider.getAuthentication(refreshToken).getAuthorities();
//            // 유저 권한 저장 위한 리스트
//            List<String> accessTokenAuthorities = new ArrayList<String>(accessTokenAuthoriryCollection.size());
//
//            String accessTokenUserId = tokenProvider.getUserId(refreshToken);
//            String newAccessToken = null;
//            // 리프레시 토큰이 유효하다면
//            if (StringUtils.hasText(refreshToken) && tokenProvider.validateToken(refreshToken)) {
//                for (GrantedAuthority x : accessTokenAuthoriryCollection) {
//                    accessTokenAuthorities.add(x.getAuthority());
//                }
//                newAccessToken = "Bearer" + tokenProvider.createAcessToken(accessTokenUserId, accessTokenAuthorities);
//                log.info("토큰 재발급 성공");
//                SingleDataResponse<String> response = responseService.getSingleDataResponse(true, "accessToken 발급성공", newAccessToken);
//                responseEntity = ResponseEntity.status(HttpStatus.OK).body(response);
//
//            }else {
//                SingleDataResponse<String> response = responseService.getSingleDataResponse(false, "accessToken 발급 실패, refreshToken 유효기간 만료", "Tk402");
//                responseEntity = ResponseEntity.status(HttpStatus.CONFLICT).body(response);
//            }
//            return responseEntity;
//        }catch (Exception e) {
//            return responseEntity;
//        }
//    }
}