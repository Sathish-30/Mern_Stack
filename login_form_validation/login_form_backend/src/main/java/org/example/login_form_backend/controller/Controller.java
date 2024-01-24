package org.example.login_form_backend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.example.login_form_backend.model.Response;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
@RestController
public class Controller {
    @GetMapping("/")
    public Response home(){
        return new Response("User is in Home Route");
    }
    @PostMapping(path = "/validate" , consumes = {MediaType.APPLICATION_FORM_URLENCODED_VALUE})
    public ResponseEntity<Response> validateUserCredentials(@RequestBody MultiValueMap<String , String> formData){
        HashMap<String , String> data = (HashMap<String, String>) formData.toSingleValueMap();
        List<String> keys = new ArrayList<>(data.keySet());
        System.out.println(data.get(keys.get(1)));
        String email = "sathish.amsaravanan@gmail.com";
        String password = "ammu2004";
        return new ResponseEntity<>(new Response( data.get(keys.get(0)).equals(email) && data.get(keys.get(1)).equals(password) ? "User Verified" : "Invalid user credentials") , HttpStatus.ACCEPTED);
    }
}

// sathish.amsaravanan@gmail.com
// ammu