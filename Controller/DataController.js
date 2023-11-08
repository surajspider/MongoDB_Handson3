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

module.exports = { dataentry, listall, salarygt };