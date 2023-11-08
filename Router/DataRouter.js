const express = require("express");
const { dataentry, listall, salarygt } = require("../Controller/DataController");

const dataRouter = express.Router();

dataRouter.post("/createdata", dataentry);
dataRouter.get("/getalldata", listall);
dataRouter.get("/salgt", salarygt);

module.exports = { dataRouter };