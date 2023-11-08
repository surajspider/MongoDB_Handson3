const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Config/db");
const { dataRouter } = require("./Router/DataRouter");
const PORT = 4500;

app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.use("/api", dataRouter);

app.get("/", (req, res) => {
    res.send("Home Page");
})

app.listen(PORT, async () => {
    try {
        await connection();
        console.log("Server started on PORT", PORT);
    }
    catch (err) {
        console.log("Error:", err);
    }
})