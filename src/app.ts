import * as bodyParser from "body-parser";
import * as express from "express";
import * as helmet from "helmet";
import { userRoutes } from "./routes/userRoutes";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(helmet());
    this.app.use(bodyParser.json()); // parse json from request body
    this.app.use("/", userRoutes);
  }
}

export default new App().app;