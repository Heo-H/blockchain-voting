const config = require(__dirname + '/../config.json');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const request = require('request');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const VOTE_REPOSITORY_URL = config.voteRepositoryUrl;
const VOTE_REPOSITORY_API = VOTE_REPOSITORY_URL + '/api';

router.post('/vote', (req, res) => {
    const voteUrl = VOTE_REPOSITORY_API + '/vote';
    const data = req.body;
    const electionId = data.election_id;

    request.post(voteUrl + '/' + electionId,
        { json: data },
        function (error, response, body) {
            res.status(response.statusCode).send(body);
        }
    );
});

module.exports = router;