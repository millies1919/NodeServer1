const express = require('express');

const app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.get('/', (req, res) => {
 res.send("getting root");
});


app.post('/', (req, res) => {
    console.log(req.body)
    const user = {
        name: 'john',
        hobby: "dogs"
    }
    res.send(user)
});
app.listen(3000);