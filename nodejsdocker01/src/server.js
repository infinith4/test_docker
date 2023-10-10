'use strict';

const express = require('express');
// Constants
const PORT = 3000;
const HOST = '0.0.0.0';
// App
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  //res.send('Hello World succeeded request');
  res.send(`<a href="/result?param1=1&param2=2">GET Method Link</a>
  <form action="/result" method="POST">
  <input type="text" name="title[]">
  <input type="text" name="title[]">
    <input type="text" name="description">
    <input type="submit">
  </form>
  <script>
  const formElm = document.querySelector('form');
  formElm.onsubmit = function(event) {
    event.preventDefault();
    const title = formElm[0].value;
    const description = formElm[1].value;

    const data = {
      title, description
    };

    fetch('/result', {
method: 'POST',
headers: {
  'content-type': 'application/json'
},
body: JSON.stringify(data)
    }).then(async function(res) {
      const data = await res.json();
      console.log("res");
      console.log(data);
      
    });
  }
  </script>`);
});

app.get('/result', (req, res) => {
  console.log("get /result");
  const params = req.query;
  console.log(params);
  //res.send({ result: "success"});
  res.json({ result: "success"});
});

app.post('/result', (req, res) => {
  console.log("post /result");
  const params = req.body;
  console.log(params);
  console.log(params.title);
  res.send({ msg: 'success'});
  // const titles = params.title;
  // res.send(`success; ${titles.join(", ")}`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT} http://localhost:${PORT}`);