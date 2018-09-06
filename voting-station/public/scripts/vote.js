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