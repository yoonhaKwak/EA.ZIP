package bit.project.eazip.domain.home;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FilterDTO {
    int type;
    String category1;
    int room_number;

    int op1;
    int op2;
    int op3;

    int minprice;
    int maxprice;
    int minmonthly;
    int maxmonthly;
}
