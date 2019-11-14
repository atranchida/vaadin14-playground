package com.performair.austin.spring.board;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.polymertemplate.PolymerTemplate;
import com.vaadin.flow.templatemodel.TemplateModel;
import org.vaadin.stefan.dnd.drag.DragSourceExtension;

@Tag("card-design")
@JsModule("./src/card-design.js")
public class Card extends PolymerTemplate<TemplateModel> {
    public Card() {
        addDragExtension();
    }

    private void addDragExtension() {
        DragSourceExtension<Card> dragSource = DragSourceExtension.extend(this);

    }
}
