const express = require("express");
const app = express();
const router = require("./routes");
const _PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(_PORT, () => {
  console.log(`Listen port ${_PORT}`);
});
