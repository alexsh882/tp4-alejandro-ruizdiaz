const express = require('express');

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const dotenv = require("dotenv");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

dotenv.config({ path: ".env" });

app.use("/", require("./routes/index.routes"));

app.listen(process.env.APP_PORT, () => {
    console.log(`Servidor en ${process.env.APP_URL}:${process.env.APP_PORT}`);
});
