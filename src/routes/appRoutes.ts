import * as express from "express";
import { userController } from "../controllers/userController";

class AppRoutes {
	public router: express.Router = express.Router();

	constructor() {
		this.config();
	}

	private config(): void {
		this.router.get("/", userController.serverTest);
	}
}

export const appRoutes = new AppRoutes().router;