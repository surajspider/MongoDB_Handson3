const express = require("express");
const { dataentry, listall, salarygt, expgt, yrgradexp, salupdate, dely } = require("../Controller/DataController");

const dataRouter = express.Router();

dataRouter.post("/createdata", dataentry);
dataRouter.get("/getalldata", listall);
dataRouter.get("/salgt", salarygt);
dataRouter.get("/expgt", expgt);
dataRouter.get("/ygradexp", yrgradexp);
dataRouter.put("/salupdate", salupdate);
dataRouter.delete("/dely", dely);

module.exports = { dataRouter };