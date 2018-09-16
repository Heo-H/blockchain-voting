const config = require(__dirname + '/../config.json');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const request = require('request');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));


const VOTE_REPOSITORY_URL = config.voteRepositoryUrl;
const VOTE_REPOSITORY_API = VOTE_REPOSITORY_URL + '/api';


router.get('/election_list', (req, res) => {
    const url = VOTE_REPOSITORY_API + '/election_list';

    request(url).pipe(res);
});

router.get('/vote_list/:id', (req, res) => {
    const url = VOTE_REPOSITORY_API + '/vote_list';
    const id = req.params['id'];

    request(url + '/' + id).pipe(res);
});


module.exports = router;