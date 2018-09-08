const db = {
    voteLists: [],

    getVotes: function (electionId) {
        if (!this.voteLists[electionId]) {
            this.voteLists[electionId] = [];
        }

        return this.voteLists[electionId];
    },

    getVote: function (electionId, voterId) {
        const votes = this.getVotes(electionId);
        const matchedVotes = votes.filter(v => {
            return (v.voterId == voterId);
        });

        if (matchedVotes.length > 0) {
            return matchedVotes[0];
        }
        else {
            return null;
        }
    },

    contains: function (electionId, voterId) {
        const vote = this.getVote(electionId, voterId);

        if (vote != null) {
            return true;
        }
        else {
            return false;
        }
    },

    push: function (electionId, vote) {
        this.getVotes(electionId).push(vote);
    }
};

module.exports = db;