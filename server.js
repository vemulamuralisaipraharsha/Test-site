const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(
    {
        From: "postsServer",
        Data: "this data is implemented to test the AWS server"
    } 
    );
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});

