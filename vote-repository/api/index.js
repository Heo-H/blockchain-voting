const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const db = require(__dirname + '/vote_db.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/vote_list/:election_id', function (req, res) {
    const electionId = parseInt(req.params["election_id"], 10);
    
    return res.status(200).json(db.getVotes(electionId));
});

router.post('/vote/:election_id', (req, res) => {
    const electionId = parseInt(req.params["election_id"], 10);
    
    const votingStationId = req.body["voting_station_id"];
    const voterId = req.body["voter_id"];
    const itemId = req.body["item_id"];
    
    const vote = {
        votingStationId: votingStationId,
        voterId: voterId,
        itemId: itemId
    };

    if (db.contains(electionId, vote.voterId)) {
        return res.status(409).send("Voter has been already voted this election. voterId: " + vote.voterId);
    }

    db.push(electionId, vote)
    return res.status(201).json(vote);
});

module.exports = router;