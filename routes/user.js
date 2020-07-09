const privateVapidKey = "fgglLGXrMoePMQwBvG7ukWQ1TxaZrFvn5qHXSxo71aw";
const publicVapidKey = "BGEmRU67CndZpbLqe-2aaZ6hFht-O30TZHS-gEIL0Yz7F4evxawgchnnDEnTPjmXedNXX5MFWOqPTEE6_b9_5kE"
const webpush = require('web-push')

var express = require("express");
var router = express.Router();
const { getHomePage,
  getRegisterAsClientPage,
  getRegisterAsCoachPage
  } = require('../controllers/userController');

//const { verifyAuthToken,  setAuthToken, unsetAuthToken } = require('../routes/auth');

/* GET home page. */
router.get("/", getHomePage);

router.get('/registerclient', getRegisterAsClientPage);
/*
Display Register Form for coach
*/
router.get('/registercoach', getRegisterAsCoachPage);

//router.get('/login',getLoginPage)

webpush.setVapidDetails(
  "mailto:test@test.com",
  publicVapidKey,
  privateVapidKey
);

// push notification subscription  on /user/Subscribe Route
router.post("/subscribe", (req, res) => {

  //Testing code for user push subscribe

  // Get pushSubscription object
  console.log("test")
  const subscription = req.body;
  global.subscription = subscription;
  // Send 201 - resource created
  res.status(201).json({});

  // Create payload
  const payload = JSON.stringify({ title: "Push Test" });

  // Pass object into sendNotification
  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});


module.exports = router;

