import * as express from "express";
import * as dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8080;


class AppRoutes {
	public router: express.Router = express.Router();

	constructor() {
		this.config();
	}

	private config(): void {
		this.router.get("/", (req: express.Request, res: express.Response) => {
			res.status(200).send(`Server now running at port ${PORT}`)
		});
	}
}

export const appRoutes = new AppRoutes().router;