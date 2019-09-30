package com.performair.austin.spring.board;

import com.vaadin.flow.component.HasComponents;
import com.vaadin.flow.component.Tag;

import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.html.Nav;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("board-layout")
@JsModule("./src/board-layout.js")
public class BoardLayout extends PolymerTemplate<TemplateModel> implements HasComponents {

    @Id("title")
    private H3 pageTitle;
    @Id("column-layout")
    private HorizontalLayout columnLayout;

    public BoardLayout(){
        pageTitle.setText("Issue Tracker");

        Column column1 = new Column();
        column1.setColumnName("TO DO");
        columnLayout.add(column1);

        Column column2 = new Column();
        column2.setColumnName("BACKLOG");
        columnLayout.add(column2);

        Column column3 = new Column();
        column3.setColumnName("TEST");
        columnLayout.add(column3);

        Column column4 = new Column();
        column4.setColumnName("TEST");
        columnLayout.add(column4);
    }
}
