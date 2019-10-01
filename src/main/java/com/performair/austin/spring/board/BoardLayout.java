package com.performair.austin.spring.board;

import com.vaadin.flow.component.HasComponents;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H3;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.dom.Element;
import com.vaadin.flow.templatemodel.TemplateModel;

@Tag("board-layout")
@JsModule("./src/board-layout.js")
public class BoardLayout extends PolymerTemplate<TemplateModel> implements HasComponents {

    @Id("title")
    private H3 pageTitle;
    @Id("column-layout")
    private HorizontalLayout columnLayout;
    @Id("div")
    private Element div;

    public BoardLayout() {
        pageTitle.setText("Issue Tracker");

        Column column1 = new Column();
        column1.setColumnName("TO DO");
        column1.addCard(new Card());
        column1.addCard(new Card());
        column1.addCard(new Card());
        columnLayout.add(column1);

        Column column2 = new Column();
        column2.setColumnName("BACKLOG");
        column2.addCard(new Card());
        column2.addCard(new Card());
        column2.addCard(new Card());
        column2.addCard(new Card());
        column2.addCard(new Card());
        column2.addCard(new Card());
        columnLayout.add(column2);

        Column column3 = new Column();
        column3.setColumnName("BACKLOG");
        column3.addCard(new Card());
        column3.addCard(new Card());
        column3.addCard(new Card());
        columnLayout.add(column3);

        Column column4 = new Column();
        column4.setColumnName("BACKLOG");
        column4.addCard(new Card());
        columnLayout.add(column4);

        Column column5 = new Column();
        column5.setColumnName("BACKLOG");
        column5.addCard(new Card());
        column5.addCard(new Card());
        column5.addCard(new Card());
        column5.addCard(new Card());
        columnLayout.add(column5);

        Column column6 = new Column();
        columnLayout.add(column6);

        Column column7 = new Column();
        columnLayout.add(column7);

        Column column8 = new Column();
        columnLayout.add(column8);

        Column column9 = new Column();
        columnLayout.add(column9);
    }
}
