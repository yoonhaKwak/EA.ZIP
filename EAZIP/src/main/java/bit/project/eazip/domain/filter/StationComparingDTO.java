package bit.project.eazip.domain.filter;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;


@Getter
@Setter
public class StationComparingDTO {

    private ArrayList<String> station1;
    private ArrayList<String> station2;
    private int timeSectionMax;
    private int timeSectionMin;

    private int walkTimeMax;
    private int walkTimeMin;
    private int transferMax;
    private int transferMin;

}


