package com.performair.austin.spring.board;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("column-design")
@JsModule("./src/column-design.js")
public class Column extends PolymerTemplate<TemplateModel> {
    @Id("column-header")
    private Span header;
    @Id("card-layout")
    private Div cardLayout;

    public void setColumnName(String name) {
        header.setText(name);
    }

    public void addCard(Card card) {
        cardLayout.add(card);
    }
}
