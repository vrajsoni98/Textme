const express = require('express')
const router = express.Router();

router.get('/',(Req,res)=> {
    res.send('server is up and running');
})

module.exports = router;