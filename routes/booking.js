var express = require("express");
var router = express.Router();
const webpush = require('web-push')
/* /book route*/


router.get("/", (req, res) => {


    //Testing code for pust notification

    // Get pushSubscription object
    //const subscription = req.body;
    
    // Send 201 - resource created
    res.status(201).json({});
   
    // Create payload
    const payload = JSON.stringify({ title: "Book Push Test" });
    console.log(global.subscription);
    // Pass object into sendNotification
    webpush
      .sendNotification(global.subscription, payload)
      .catch(err => console.error(err));
  });
  module.exports = router;