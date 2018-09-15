function getElectionsAll() {
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

    return elections;
}

function getElection(electionId) {
    const elections = getElectionsAll();
    return elections[electionId];
}

function getVotes(electionId) {
    return [{votingStationId: 1, voterId: 201203426, itemId: 1}, {votingStationId: 1, voterId: 201203427, itemId: 2}, {votingStationId: 1, voterId: 201203428, itemId: 2}];
}
