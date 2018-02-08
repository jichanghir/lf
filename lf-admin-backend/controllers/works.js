const getWorks = require('../api/controllers/getWorks');

module.exports.page = (req, res) => {
    getWorks()
    .then((result) => {
        res.render('works',{
           title: 'Works',
           works: result
        });
    })
    .catch((err) => {
        console.log("err", err);
        res.status(400).send(err);
    })
}
