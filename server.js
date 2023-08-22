const express = require("express");
const router = require("./router");
const cors = require('cors')

const app = express();

const cors_options = {
    origin: "*",
    optionsSuccessStatus: 200,
};
app.use(cors(cors_options));

app.use(express.json());

app.use('/api/info', router);

app.get("/", (req, res) => {
    res.send("API Running!");
});

app.listen(3000, console.log("Server running"));
