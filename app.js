const express = require("express")
const bodyParser = require("body-parser")
const path = require('path');
var userRoute = require("./routes/user");
var eventRoute = require("./routes/events");
var bookingRoute = require("./routes/booking");



const app = express();

// Set static path
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());

//route registration
app.use('/user',userRoute);
app.use('/book',bookingRoute);
//app.use('/event',eventRoute)

const port = 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));