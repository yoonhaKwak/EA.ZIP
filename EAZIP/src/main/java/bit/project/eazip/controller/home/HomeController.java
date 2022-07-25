package bit.project.eazip.controller.home;


import java.util.List;



import bit.project.eazip.domain.home.HomeDTO;
import bit.project.eazip.domain.facilities.GangnamDTO;
import bit.project.eazip.service.home.HomeService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@Log
@RestController
@CrossOrigin("*")
public class HomeController {

    @Autowired
    HomeService service;

    @GetMapping("/getlist")
    public List<HomeDTO> GetList() {
        log.info("GetList 컨트롤러 집입");
        log.info("디버깅 시작");
        List<HomeDTO> home = service.getList();

        return home;


    }
}
