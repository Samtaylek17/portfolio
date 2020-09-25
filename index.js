const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');

const app = express();
app.use(bodyParser.json())

messages = {}

app.get('/messages', (req, res) => {
    res.send(messages)
});

app.post('/messages', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { name, email, project, description } = req.body;

    messages[id] = {
        id, name, email, project, description
    }

    res.status(201).send(messages[id]);
});


app.listen(4005, () => {
    console.log('Listening on port 4005');
})
