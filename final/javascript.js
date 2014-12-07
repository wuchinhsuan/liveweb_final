    $(".productItem").draggable({
        helper: 'clone',
        handle: "productItem"
    });

    $("#basket").droppable({
        accept: ".productItem",
        drop: function(event, ui){
            $("<div></div>")
                .html(ui.draggable.text())
                .appendTo($(this));
        }
    });
