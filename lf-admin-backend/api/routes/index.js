const express = require('express');
const router = express.Router();

const getSkills = require('../controllers/getSkills');
const setSkills = require('../controllers/setSkills');

const addArticle = require('../controllers/addArticle');

// todo: добавить ответы на ошибки 404 или 400
router.get('/getSkills', (req, res) => {
    getSkills()
    .then((result) => {
        res.send({
            result: result
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
});

router.post('/setSkills', (req, res) => {
    setSkills(req)
    .then((result) => {
        res.send({
            result: result
        })
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
});

router.post('/addArticle', (req, res) => {
    addArticle(req)
    .then((result) => {
        res.send({
            result: result
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(400).send(err);
    });
});

router.post('/auth', (req, res) => {
    if ((req.body.login && req.body.password) &&
        (req.body.login === 'admin' && req.body.password === 'admin')
        )
    {
        res.redirect('http://localhost:8080/');
    }
    else {
        res.redirect('/');
    }

});


module.exports = router;
