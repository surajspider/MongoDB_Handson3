const clouddb = "mongodb+srv://ramsuraj14:surajMongodb@cluster0.ja3jyma.mongodb.net/?retryWrites=true&w=majority";
const mongoose = require("mongoose");
mongoose.set("strictQuery", true)


const connection = async () => {
    try {
        await mongoose.connect(clouddb)
        console.log("connection made successful");
    }
    catch (err) {
        console.log("Error occurred during connection", err);
    }
}

module.exports = connection;