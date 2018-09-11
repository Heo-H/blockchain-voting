/*
 * getFormData()
 * 출처: https://stackoverflow.com/questions/11338774/serialize-form-data-to-json/11339012#11339012
 */
function getFormData($form){
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });

    return indexed_array;
}

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

    const data = getFormData($('#vote_form'));
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