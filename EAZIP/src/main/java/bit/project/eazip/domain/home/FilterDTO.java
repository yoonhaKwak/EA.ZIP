package bit.project.eazip.domain.home;


import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;

@Getter
@Setter
public class FilterDTO {
    private Double d_lat;
    private Double d_lng;
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

    private ArrayList<String> station1;
    private ArrayList<String> station2;

    //소요시간
    private int timeSectionMin;
    private int timeSectionMax;
    //도보시간
    private int walkTimeMin;
    private int walkTimeMax;
    //환승횟수
    private int transferMin;
    private int transferMax;




}
