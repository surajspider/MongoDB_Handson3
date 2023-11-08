const employee = require("../Models/DataModel")
const data = require("../data")


const dataentry = async (req, res) => {
    const response = await employee.create(data);
    console.log(response);
    return res.send(response);
}

const listall = async (req, res) => {
    const listallquery = await employee.find();
    console.log(listallquery);
    return res.send(listallquery);
}

const salarygt = async (req, res) => {
    const salgt = await employee.find({ "salary": { $gt: 30000 } });
    console.log(salgt);
    return res.send(salgt);
}

const expgt = async (req, res) => {
    const expgt2 = await employee.find({ "overallExp": { $gt: 2 } });
    console.log(expgt2);
    return res.send(expgt2);
}

const yrgradexp = async (req, res) => {
    const gradExp = await employee.find({ "yearGrad": { $gt: 2015 }, "overallExp": { $gt: 1 } });
    console.log(gradExp);
    return res.send(gradExp);
}

const salupdate = async (req, res) => {
    const salup = await employee.updateMany({ "salary": { $gt: 70000 } }, { $set: { "salary": 65000 } });
    console.log(salup);
    return res.send(salup);
}

const dely = async (req, res) => {
    const deletey = await employee.deleteMany({ "lastCompany": "Y" });
    console.log(deletey);
    return res.send(deletey);
}

module.exports = { dataentry, listall, salarygt, expgt, yrgradexp, salupdate, dely };