package com.performair.austin.spring.login;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.combobox.ComboBox;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.component.textfield.PasswordField;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.templatemodel.TemplateModel;

import java.util.List;

@Tag("login-layout")
@JsModule("./src/login-layout.js")
public class LoginLayout
    extends PolymerTemplate<TemplateModel> {

    @Id("realms")
    private ComboBox<String> realms;

    @Id("username")
    private TextField username;

    @Id("password")
    private PasswordField password;

    @Id("save")
    private Button save;

    public void setRealms(List<String> realms) {
        this.realms.setItems(realms);
    }
}
