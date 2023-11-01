const express = require('express');
const router = express.Router();
const validateToken = require('./validate-token');

router.get('/', validateToken, (req, res) => {
    res.json({
        error: null,
        data: {
          title: 'Home',
          user: req.user
        }
    });
});

module.exports = router;
