const MeetingsController = require("./lib/controllers/MeetingsController");

const express = require("express");
const cors = require('cors')
const Meeting = require("./lib/models/Meeting");
const { json } = require("express/lib/response");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
// Add Access Control Allow Origin headers
app.use(function(req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// initial path in localhost:3000
app.get('/', (req, res) => {
    res.status(200).send('API for FreeOcean meetings!')
})


// returning simple text
app.get('/v1/meetings', cors(), (req, res) => {
    res.send(MeetingsController.getAll());
})

// returns an object 
// http://localhost:3000/explorersInNode
app.post('/v1/meetings/add', (req, res) => {
    const name = req.body.name;
    const org = req.body.org;
    const desc = req.body.desc;
    const tags = req.body.tags;
    const meeting = new Meeting(name, org, desc, tags, new Date(), new Date());


    MeetingsController.addMeeting(meeting);

    res.status(201).json({message: "created", new_meeting: meeting});
})

// to receive params from url 
// http://localhost:3000/explorers/mauri
// req.params = {"explorerName":"mauri"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})