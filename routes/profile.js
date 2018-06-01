const express = require('express')
const router = express.Router()
const queries = require('../db/queries')

router.get("/", (request, response, next) => {
    queries.getProfiles().then(profiles => {
        response.json({
            profiles
        });
    }).catch(next);
})

module.exports = router