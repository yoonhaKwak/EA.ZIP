package bit.project.eazip.service;

import bit.project.eazip.domain.SampleDTO;

import java.util.List;
public interface SampleService {
    public SampleDTO selectData();

    public List<SampleDTO> selectList();

    public List<Double> selectLat();

    public List<Double> selectLng();
}
