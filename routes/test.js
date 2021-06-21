const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// router.get('/', (req, res) => {
//     res.render('blueClick');
// });
const upload = multer({
    dest: path.join(__dirname, '../public/uploads/')
});


router.post('/', upload.single('lalala'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    res.json({status: 'ok'});
});

module.exports = router;
