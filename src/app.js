const nodemailer = require('nodemailer')
const express = require('express')
const serverless = require('serverless-http')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 8000
const router = express.Router();

const staticpath = path.join(__dirname, '../public')
app.use(express.static(staticpath))

var value;
router.get('/', (req, res) => {
    res.write("Hi")
    res.end()
})
router.get('/about', (req, res) => {
    res.write("Hi from About")
    res.end()
})

app.listen(PORT, () => {
    console.log("Server was Started")
})
app.use('/.netlify/functions/server', router);
module.exports = app;
module.exports.handler = serverless(app);


