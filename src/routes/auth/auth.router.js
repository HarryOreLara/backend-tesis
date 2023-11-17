const { Router } = require("express");
const { check } = require("express-validator");
const verifyToken = require("../../middlewares/verifyToken");
const validationErrors = require("../../middlewares/validationErrors");
const {registerUser,loginUser, getAll} = require("../../controllers/auth/authController");


const authRouter = Router();



authRouter.post("/register",[], registerUser);
authRouter.post("/login",[], loginUser);
authRouter.get("/getAllExperimentales",[], getAll);




module.exports = authRouter;



