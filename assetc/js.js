$(function() {
    $("#forum div").on("click", function (event) {
        event.preventDefault();
        $(this).addClass("active");
    });
/*    $("#submit").on("click", function (event) {
        event.preventDefault();
        $("#sub").addClass("active");
    });*/
});

