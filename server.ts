import { config } from "./src/config/config";

const app = require("./src/app.ts");

const startServer = () => {
  const port = config.port || 3000;

  app.listen(port, () => {
    console.log(`Server Running at http://localhost:${port}/`);
  });
};

startServer();
