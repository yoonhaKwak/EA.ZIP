package bit.project.eazip.controller.test;


import bit.project.eazip.domain.SampleDTO;
import bit.project.eazip.service.SampleService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Log
@RestController
public class TestController {

    @Autowired
    SampleService service;

    @GetMapping("/hospital")
    public String selectData(){
        log.info("컨트롤러~");
        SampleDTO dto = service.selectData();
        log.info(dto.getName());
        return dto.getName();
    }

    @GetMapping("/hospitalList")
    public List<SampleDTO> selectList(){
        log.info("controller list~~~~~~~~~");
        System.out.println(service.selectList());
        return service.selectList();
    }
}