package bit.project.eazip.domain;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SampleDTO {
    private String name;
    private String addr1;
    private String addr2;
    private double lat;
    private double lng;



    private String 매물명;

    private Double WGS84위도;
    private Double WGS84경도;

    private String 구주소;
    private String 신주소;

}
