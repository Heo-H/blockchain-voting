globalData = {};

function displayPage(pageId) {
    $('.page').hide();
    $('#' + pageId).show();
}


$(document).ready(function () {

function main() {
    displayPage('login');
}
main();

});