const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const indexRouter = require("./routes/index.route");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())


app.set("view engine", "twig");
app.use(express.static("public"));

app.use((req, res, next) => {
    console.log("middleware");
    next();
})

app.use("/", indexRouter)

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
})