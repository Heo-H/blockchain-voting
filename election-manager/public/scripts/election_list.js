$(document).ready(function () {

refresh();

function refresh() {
    const elections = getElectionsAll();
    const list = $('#election_list');
    list.empty();

    for (let i = 1; i < elections.length; i++) {
        const election = elections[i];
        const item = $("<li>" + election.title + "</li>");
        item.click(function () {
            globalData.election = election;
            refreshElectionInfo();
            displayPage('election_info');
        });
        list.append(item);
    }
}

});