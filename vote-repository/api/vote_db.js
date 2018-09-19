const config = require(__dirname + '/../config.json');

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8485'));
const eth = web3.eth;

// const votingSrc = require(__dirname + '/compile.js');
// const bytecode = votingSrc.bytecode;
// const abi = JSON.parse(votingSrc.interface);
const bytecode = '608060405234801561001057600080fd5b50610230806100206000396000f3006080604052600436106100565763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416631840f0ca811461005b57806349330cb81461008557806368c9e388146100c6575b600080fd5b34801561006757600080fd5b506100736004356100e9565b60408051918252519081900360200190f35b34801561009157600080fd5b506100a06004356024356100fb565b604080519485526020850193909352838301919091526060830152519081900360800190f35b3480156100d257600080fd5b506100e7600435602435604435606435610179565b005b60009081526020819052604090205490565b6000806000806101096101db565b600087815260208190526040902080548790811061012357fe5b60009182526020918290206040805160808101825260049390930290910180548084526001820154948401859052600282015492840183905260039091015460609093018390529a929950975095509350505050565b600084815260208181526040808320815160808101835297885287830196875290870194855260608701938452805460018181018355918452919092209551600490910290950194855592519284019290925551600283015551600390910155565b6080604051908101604052806000815260200160008152602001600081526020016000815250905600a165627a7a7230582060a6b8b6ac0448950ada21ff6acd1b1bc5dba48b9ea1c9c7d0a475d0923168bb0029';
const abi = [ { "constant": true, "inputs": [ { "name": "election_id", "type": "uint256" } ], "name": "countVotes", "outputs": [ { "name": "", "type": "uint256", "value": "10" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x1840f0ca" }, { "constant": true, "inputs": [ { "name": "election_id", "type": "uint256" }, { "name": "vote_index", "type": "uint256" } ], "name": "getVote", "outputs": [ { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x49330cb8" }, { "constant": false, "inputs": [ { "name": "election_id", "type": "uint256" }, { "name": "voting_station_id", "type": "uint256" }, { "name": "voter_id", "type": "uint256" }, { "name": "item_id", "type": "uint256" } ], "name": "vote", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x68c9e388" } ];
const votingContract = eth.contract(abi);

const voting = votingContract.at(config.contractAddress);

const db = {
    voteLists: [],

    getVotes: function (electionId) {
        const votes = [];
        
        const nVotes = voting.countVotes(electionId).toNumber();
        for (let i = 0; i < nVotes; i++) {
            const voteData = voting.getVote(electionId, i);
            const vote = {
                electionId: voteData[0].toNumber(),
                votingStationId: voteData[1].toNumber(),
                voterId: voteData[2].toNumber(),
                itemId: voteData[3].toNumber(),
            };
            votes.push(vote);
        }

        return votes;
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
        
        voting.vote(electionId, vote.votingStationId, vote.voterId, vote.itemId, {from: eth.coinbase, gas: 200000});
    }
};

module.exports = db;