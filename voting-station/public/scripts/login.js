$(document).ready(function () {

$('#login_button').click(function () {
    login();

    displayPage('vote');
});

function login() {
    globalData.voterId = getVoterId();
    globalData.elections = getElectionsByVoter(globalData.voterId);
    globalData.electionIndex = 0;
}

});