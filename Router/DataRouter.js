const express = require("express");
const { dataentry } = require("../Controller/DataController");

const dataRouter = express.Router();

dataRouter.post("/createdata", dataentry);

module.exports = { dataRouter };