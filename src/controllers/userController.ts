import { Request, Response } from "express";
import * as dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 8080;

class UserController{

	public serverTest = (req: Request, res: Response ): void => {
		res.status(200).send(`Server is now running on port ${PORT}`);
	}

	public getUserList = (req: Request, res: Response): void => {
		res.status(200).send(`List of users`);
	}

	public getUserDetails = (req: Request, res: Response): void => {
		res.status(200).send(`Get details for ${req.params.userId}`);
	}

	public createUser = (req: Request, res: Response): void => {
		res.status(200).send(`Create User`);
	}
	
	public updateUser = (req: Request, res: Response): void => {
		res.status(200).send(`Update ${req.params.userId}`)
	}

	public deleteUser = (req: Request, res: Response): void => {
		res.status(200).send(`Delete user ${req.params.userId}`)
	}
	
}

export const userController = new UserController;