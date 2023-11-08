const employee = require("../Models/DataModel")
const data = require("../data")


const dataentry = async (req, res) => {
    const response = await employee.create(data);
    console.log(response);
    return res.send(response);
}

module.exports = { dataentry };