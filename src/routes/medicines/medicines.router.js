const { Router } = require("express");

const {    getAllMedicine, getOneMedicine_ById, getLisAllMedicine_byId, 
    postMedicine, updateMedicine, deleteMedicine} = require("../../controllers/medicines/medicineController");
const verifyToken = require("../../middlewares/verifyToken");


const medicineRouter = Router();

// medicineRouter.get("/getAll",[], getAllMedicine);

// medicineRouter.get("/getOne",[], getOneMedicine_ById);

// medicineRouter.get("/getList",[], getLisAllMedicine_byId);

medicineRouter.post("/post",[verifyToken], postMedicine);

// medicineRouter.get("/update",[], updateMedicine);

// medicineRouter.get("/delete",[], deleteMedicine);


module.exports = medicineRouter;
