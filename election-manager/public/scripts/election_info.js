
function refreshElectionInfo() {
    function countVotes(votes, itemId) {
        let cnt = 0;
        votes.forEach(vote => {
            if (vote.itemId == itemId) {
                cnt += 1;
            }
        });
        return cnt;
    }

    const election = globalData.election;

    $('#election_title').text(election.title);

    const items = $('#vote_items');
    items.empty();
    
    const votes = getVotes(election.id);
    let itemId = 0;
    election.items.forEach((item, itemId) => {
        const cnt = countVotes(votes, itemId);
        items.append('<li class="item"><span class="item_name">' + item + '</span><span class="item_btn">' + cnt + ' 표</span></li>');
    });
    
}


$(document).ready(function () {

});