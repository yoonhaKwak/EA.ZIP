package bit.project.eazip.controller;


import bit.project.eazip.domain.SampleDTO;
import bit.project.eazip.service.SampleService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Log
@RestController
public class HelloWorldController {

    @Autowired
    SampleService service;

    @GetMapping("/hospital")
    public String selectData(){
        log.info("컨트롤러~");
        SampleDTO dto = service.selectData();
        log.info(dto.getName());
        return dto.getName();
    }
}