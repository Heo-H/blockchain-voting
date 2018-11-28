pragma solidity ^0.4.18;

contract Voting {
    struct Vote {
        uint election_id;
        uint voting_station_id;
        uint voter_id;
        uint item_id;
    }

    struct Election {
        Vote[] votes;
    }

    mapping (uint => Election) elections;
    
    function vote(uint election_id, uint voting_station_id, uint voter_id, uint item_id) public {
        elections[election_id].votes.push(Vote(election_id, voting_station_id, voter_id, item_id));
    }
    
    function countVotes(uint election_id) public constant returns (uint) {
        return (elections[election_id].votes.length);
    }

    function getVote(uint election_id, uint vote_index) public constant returns (uint, uint, uint, uint) {
        Vote memory v = elections[election_id].votes[vote_index];
        return (v.election_id, v.voting_station_id, v.voter_id, v.item_id);
    }
}