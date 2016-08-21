import express from 'express';

let app = express();
app.get('/', (req, res) => res.send('hello bof!'));

app.listen(3000);
console.log ("some");
