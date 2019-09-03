const express = require('express');
const router = express.Router();
const db = require("../utils/db");

/* GET user listing. */
router.get('/info', (req, res) => {
    let sql = "select * from user_info";
    db.query({
        sql,
        success: r => {
            r.test = 'aaa';
            res.json(r);
        },
        error: err => {
            if (err) {
                res.json(err);
            }
        }
    });
});

router.get('/test', (req, res) => {
    res.json({'test': '测试接口成功'});
});

module.exports = router;
