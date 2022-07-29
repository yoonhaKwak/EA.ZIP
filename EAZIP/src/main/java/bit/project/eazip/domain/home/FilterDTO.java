package bit.project.eazip.domain.home;


import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class FilterDTO {


    private String addr1;

    private ArrayList<String> type;
    private ArrayList<String> category1;
    private ArrayList<String> room_number;

    private String op1;
    private String op2;
    private String op3;

    private int minprice;
    private int maxprice;
    private int minmonthly;
    private int maxmonthly;


}
