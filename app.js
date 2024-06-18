const express = require("express");
const cors = require("cors");
const { router } = require("./routes/indexroutes");
const app = express();

app.use(cors());
// app.use(express.json());
app.use("/v1", router);

const PORT = 3001;

function main() {
  app.listen(PORT, () => {
    console.log("API esta lista en el puerto:", PORT);
  });
}

main();
