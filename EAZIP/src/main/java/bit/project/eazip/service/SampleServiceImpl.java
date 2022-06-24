package bit.project.eazip.service;

import bit.project.eazip.domain.SampleDTO;
import bit.project.eazip.mapper.SampleMapper;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Log
public class SampleServiceImpl implements SampleService {
    @Autowired
    SampleMapper sampleMapper;
    @Override
    public SampleDTO selectData(){
        log.info("ServiceImpl 랄라~");
        return sampleMapper.selectData();
    }
}
