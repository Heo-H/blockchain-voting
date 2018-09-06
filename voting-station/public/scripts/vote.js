function refreshVotePage() {
    const election = globalData.elections[globalData.electionIndex];
    $('#election_title').text(election.title);
    $('#election_id').val(election.id);
    $('#voter_id').val(globalData.voterId);

    const items = $('#vote_items');
    items.empty();

    let itemId = 0;
    election.items.forEach(item => {
        items.append('<label class="item"><span class="item_name">' + item + '</span><input type="radio" name="item_id" value="' + itemId + '" required><span class="item_btn"></span></label>');
        itemId += 1;
    });
}


$(document).ready(function () {

$('#vote_form').submit(function (e) {
    e.preventDefault();
    e.stopPropagation();

    const data = $('#vote_form').serialize();
    submitVote(data);

    const hasNextElection = (globalData.electionIndex < globalData.elections.length - 1);
    if (hasNextElection) {
        globalData.electionIndex += 1;
        refreshVotePage();
    }
    else {
        displayPage('login');
    }

    return false;
});

});