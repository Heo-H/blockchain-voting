$(document).ready(function () {
    $("div[data-html-src]").each(function () {
        $(this).load($(this).attr("data-html-src"));
    })
});