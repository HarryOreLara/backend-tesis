const { Router } = require("express");

const {    getLisAllMedicine_byCreator, getOneMedicine_ById, getLisAllMedicine_byId, 
    postMedicine, updateMedicine, deleteMedicine,getAllMedicine} = require("../../controllers/medicines/medicineController");
const verifyToken = require("../../middlewares/verifyToken");


const medicineRouter = Router();

medicineRouter.get("/getAll",[], getAllMedicine);

medicineRouter.get("/getList/:id",[], getLisAllMedicine_byCreator);

medicineRouter.get("/getOne/:id",[], getOneMedicine_ById);

medicineRouter.post("/post",[verifyToken], postMedicine);

medicineRouter.put("/update/:id",[], updateMedicine);

medicineRouter.delete("/delete/:id",[], deleteMedicine);

//proando
module.exports = medicineRouter;
