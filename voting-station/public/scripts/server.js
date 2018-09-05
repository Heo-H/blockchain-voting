function getVoterId() {
    const voterIdInput = $('#voter_id');
    return voterIdInput.text();
}

function getElection(electionId) {
    const elections = [
        {},
        {
            id: 1,
            title: "선거 A",
            items: [ "1. 후보 A", "2. 후보 B", "3. 후보 C", "기권" ]
        },
        {
            id: 2,
            title: "선거 B",
            items: [ "1. 후보 A", "2. 후보 B", "3. 후보 C" ]
        }
    ];
    return elections[electionId];
}

function getElectionIdsByVoter(voterId) {
    return [ 1, 2 ];
}

function getElectionsByVoter(voterId) {
    const electionIds = getElectionIdsByVoter(voterId);
    
    let elections = [];
    electionIds.forEach(electionId => {
        elections.push(getElection(electionId));
    });
    
    return elections;
}