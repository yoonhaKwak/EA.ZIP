package bit.project.eazip.domain.member;

import lombok.Getter;
import lombok.Setter;

import java.util.Collection;

@Getter
@Setter
public class MemberDTO {
    int cno;
    String id;
    String password;
    String name;
    String phone;
    String email;
    String history;

}
