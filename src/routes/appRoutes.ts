import * as express from "express";
import { userController } from "../controllers/userController";

class AppRoutes {
  public router: express.Router = express.Router();

  constructor() {
    this.config();
  }
  
  private config(): void {
    this.router.get("/", userController.serverTest);
    this.router.get("/users", userController.getUserList);
    this.router.get("/users/:userId", userController.getUserDetails);
    this.router.post("/users", userController.createUser);
    this.router.put("/users/:userId", userController.updateUser);
    this.router.delete("/users/:userId", userController.deleteUser);
  }
}

export const appRoutes = new AppRoutes().router;