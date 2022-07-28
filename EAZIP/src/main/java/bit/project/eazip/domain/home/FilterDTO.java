package bit.project.eazip.domain.home;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilterDTO {
    String type;
    String category1;
    String room_number;

    String op1;
    String op2;
    String op3;

    int minprice;
    int maxprice;
    int minmonthly;
    int maxmonthly;
}
