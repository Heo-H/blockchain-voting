const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
    const data = {
        data: "test data"
    };

    res.status(200).json(data);
});

module.exports = router;