package com.gavril.jwt.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin("*")
public class HomeController {

    @RequestMapping(value = {"/contact","/register"})
    public String index() {
        return "index.html";
    }
}
