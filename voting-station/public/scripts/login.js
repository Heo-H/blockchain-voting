$(document).ready(function () {

$('#login_button').click(function () {
    login();

    refreshVotePage();
    displayPage('vote');
});

function login() {
    globalData.voterId = getVoterId();
    globalData.elections = getElectionsByVoter(globalData.voterId);
    globalData.electionIndex = 0;
}

});