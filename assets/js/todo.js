//check off todos by clicking

$("ul").on("click", "li", function(){
    //when li in ul is clicked
    //add event listeners to elements that are loaded right away
    //i.e. not new ones
    $(this).toggleClass("completed")
});

//click on x to delete to-do. Note: avoid "event bubbling"
$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
        //this refers to the parent since .parent is called
    }); //remove parent element of span->li
    //span -> li.remove
    event.stopPropagation(); //stop "bubbling"
});

//create new to-dos. submit on enter
$("input[type='text']").keypress(function (event) {
    //if enter (code: 13) is pressed
    if (event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-pencil").click(function(){
    $("input[type='text']").fadeToggle();
});