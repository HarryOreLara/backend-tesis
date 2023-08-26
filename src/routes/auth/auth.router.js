const { Router } = require("express");
const { check } = require("express-validator");
const verifyToken = require("../../middlewares/verifyToken");
const validationErrors = require("../../middlewares/validationErrors");
const {    registerUser,loginUser} = require("../../controllers/auth/authController");


const authRouter = Router();



authRouter.post("/register",[], registerUser);
authRouter.post("/login",[], loginUser);





module.exports = authRouter;



