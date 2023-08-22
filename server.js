const express = require("express");
const router = require("./router");
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/info', router);

app.get("/", (req, res) => {
    res.send("API Running!");
});

app.listen(3000, console.log("Server running"));
