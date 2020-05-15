import { Request, Response } from "express";
import * as dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 8080;

class UserController{

	public serverTest = (req: Request, res: Response ): void => {
		res.status(200).send(`Server is now running on port ${PORT}`)		
	}
}

export const userController = new UserController;