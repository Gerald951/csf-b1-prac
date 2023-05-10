package ibf2022.csf.b1.assessment.server.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;

@Controller
public class MovieController {

	@Value("${search.movie.url}")
	private String movieURL;

	


}
