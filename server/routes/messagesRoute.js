const { addMessage, getMessages } = require("../Controllers/messagesController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);

module.exports = router;