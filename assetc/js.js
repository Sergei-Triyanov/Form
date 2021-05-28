$(function() {
    $("#forum div").on("click", function (event) {
        event.preventDefault();
        $(this).addClass("active");
    });
});
