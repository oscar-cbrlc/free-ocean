const MeetingsController = require("./lib/controllers/MeetingsController");

const express = require("express");
const cors = require('cors')
const Meeting = require("./lib/models/Meeting");
const app = express();
const port = 3000;

// Add Access Control Allow Origin headers
/*app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://yoursite.com");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res
    next();
  });*/

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
app.post('/v1/name=:name&&org=:org&&desc=:desc&&tags=:tags', (req, res) => {
    const name = req.params.name;
    const org = req.params.org;
    const desc = req.params.desc;
    const tags = req.params.tags;
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