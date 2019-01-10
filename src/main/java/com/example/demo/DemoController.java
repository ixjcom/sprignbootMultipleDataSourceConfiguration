package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.util.Enumeration;

@Controller
public class DemoController {
    @RequestMapping("/")
    public String returnMessage(HttpServletRequest request){
        Enumeration<String> headerNames = request.getHeaderNames();
        while(headerNames.hasMoreElements()) {
            String s = headerNames.nextElement();
            System.out.println(s + "==============" +  request.getHeader(s));
        }
        System.out.println(request.getLocalAddr()+">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        System.out.println(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        return "index";
    }
    @RequestMapping("/model.action")
    public void model(@RequestParam("modelUse")String string){
        System.out.println(string);
    }
}
