package com.performair.austin.spring.login;

import com.vaadin.flow.router.Route;

import java.util.ArrayList;
import java.util.List;

@Route("login")
public class LoginView
    extends LoginLayout{

    public LoginView() {
        List<String> realms = new ArrayList<String>();
        realms.add("Constellation");
        realms.add("Perform Air");
        this.setRealms(realms);
    }
}
