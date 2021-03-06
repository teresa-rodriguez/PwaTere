const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json());

// Routes
app.use(require('./routes/main'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
