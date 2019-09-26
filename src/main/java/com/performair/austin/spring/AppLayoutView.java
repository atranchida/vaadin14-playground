package com.performair.austin.spring;

import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.router.Route;

@Route("applayout")
public class AppLayoutView
    extends AppLayout {

    public AppLayoutView() {
        this.addContent(new Span("This is my custom content"));
    }
}
