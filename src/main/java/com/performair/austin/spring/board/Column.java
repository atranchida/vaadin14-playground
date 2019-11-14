package com.performair.austin.spring.board;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dialog.Dialog;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Label;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.polymertemplate.Id;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;
import org.vaadin.stefan.dnd.drop.DropTargetExtension;

@Tag("column-design")
@JsModule("./src/column-design.js")
public class Column extends PolymerTemplate<TemplateModel> {
    @Id("column-header")
    private Span header;
    @Id("card-layout")
    private Div cardLayout;
    @Id("btnColumn")
    private Button btnColumn;

    public Column() {
        addDropTargetExtension();

        btnColumn.addClickListener( e -> {
          Dialog dialog = new Dialog();
          dialog.add(new Label("Add Issue Dialog"));
          dialog.open();
        });
    }

    public void setColumnName(String name) {
        header.setText(name);
    }

    public void addCard(Card card) {
        cardLayout.add(card);
    }

    private void addDropTargetExtension() {
        DropTargetExtension<Column> dropTargetExtension = DropTargetExtension.extend(this);
        dropTargetExtension.addDropListener(event -> event.getDragSource().ifPresent(
                source -> {
                    if (source.getComponent() instanceof Card)
                        event.getComponent().addCard((Card) source.getComponent());
                }));
    }
}
