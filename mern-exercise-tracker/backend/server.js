const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const bodyParser = require("body-parser");
const passport = require("passport");

//require('dotenv').config();

const userss = require("./routes/api/userss");

const app = express();
//const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require ("./config/keys").mongoURI; 

// Connect to MongoDB
/*mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
*/
// Passport middleware
app.use(passport.initialize());

require("./config/passport")(passport);
/*const uri = process.env.ATLAS_URI;*/
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRoutes = require('./routes/exercises');
const usersRoutes = require('./routes/users');
const users = require("./routes/api/userss");

app.use('/exercises',exercisesRoutes);
app.use('/users',usersRoutes);
app.use('/api/userss',userss)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});