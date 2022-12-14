const express = require("express");

const router = express.Router();
const Contact = require("../controllers/contact");

module.exports = router.post(
  "/contacting",
  Contact.contact
  // (req, res) => res.send("test ok2")
);

// module.exports = router.get("/test", (req,res) => res.send('test ok'));
