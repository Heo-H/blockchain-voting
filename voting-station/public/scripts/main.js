$(document).ready(function () {

function displayPage(pageId) {
    $('.page').hide();
    $('#' + pageId).show();
}

function main() {
    displayPage('login');
}
main();

});