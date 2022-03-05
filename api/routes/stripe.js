const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = 'sk_test_51K8grNCLc9u6fXbU0mJSiF697sKE9xWjMgNHoLpRgAcA3c06RLUsE7PYPPSqBXWiaEO5f5lzL1t0rGCPIWBqFsGw00Z2rLrdaz'
const stripe = require("stripe")(KEY);


router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
