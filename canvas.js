const express = require("express");
const app = express();

const port = 5500;

app.listen(port, () => console.log(`Got Ya!...${port}`));

app.use(express.static("public"));
