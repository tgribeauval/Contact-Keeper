const express = require("express");
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all user contacts
// @access      Private
router.get("/", (req, res) => {
  res.send("Get all user contacts");
});

// @route       POST api/contacts
// @desc        add new contact
// @access      Private

router.post("/", (req, res) => {
  res.send("add new contact");
});

// @route       PUT api/contacts/:id
// @desc        Update contact
// @access      Private
router.put("/:id", (req, res) => {
  res.send("update contact");
});

// @auth        DELETE api/contacts/:id
// @desc        Delete contact
// @access      Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
