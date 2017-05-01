// grab our dependencies
const express = require('express'),
  app = express(),
  port = process.env.PORT || 4040;
//configure our application

//set routes
app.get('/', (req, res) => {
  res.send('Hello, I am the app!');
});

//start our server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
