const express = require('express');
const sequelize = require('./config/connection');

const routes = require('./routes');
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// force:true indicates the table will be dropped then created every time
sequelize.sync({ force: false }).then(() =>{
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`); // logs string and port
  });
});
