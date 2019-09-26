package com.performair.austin.spring;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("app-layout")
@JsModule("./src/app-layout.js")
public class AppLayout extends PolymerTemplate<AppLayout.AppLayoutModel> {

    @Id("header")
    HorizontalLayout header;

    @Id("content")
    Div content;


    public AppLayout() {
        header.add(new H2("My Logo"));
    }

    public void addContent(Component contentComponent) {
        content.add(contentComponent);
    }

    /**
     * This model binds properties between AppLayout and app-layout
     */
    public interface AppLayoutModel extends TemplateModel {
        // Add setters and getters for template properties here.
    }
}
