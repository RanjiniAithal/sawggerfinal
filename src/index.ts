import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

const app = express();
app.use(express.json());


// swagger config
var options = {
  explorer: true,
};

app.use(
  "/api-docs",
  swaggerUi.serveFiles(swaggerDocument, options),
  swaggerUi.setup(swaggerDocument)
);
// swager config end
app.use("/api", require("./routes/v1/app"));
app.get("/", (req:any, res:any) => {
  res.send("Helloooooooooooooo");
  console.log("api hit.. ")
});

app.listen(8082, () => console.log(`Server is running on port 8082`));