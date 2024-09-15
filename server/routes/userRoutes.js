const {register} = require("../Controllers/usersController")
const {login} = require("../Controllers/usersController")
const {setAvatar} = require("../Controllers/usersController")
const {getAllUsers} = require("../Controllers/usersController")
const router = require("express" ).Router();

router.post("/register",register);
router.post("/login",login)
router.post("/setAvatar/:id",setAvatar)
router.get("/allusers/:id",getAllUsers)

module.exports = router