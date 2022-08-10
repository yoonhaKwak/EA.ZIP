package bit.project.eazip.controller.general;

import lombok.extern.java.Log;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/general")
@Log
@RestController
@CrossOrigin(origins = "http://localhost:3000",allowCredentials = "true")
public class GeneralController {

}
