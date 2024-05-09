import express, { type Request, type Response } from "express";
import type { Staker } from "./staking.interface";
import * as StakingSvc from "./staking.service";

export const stakingRouter = express.Router();

stakingRouter.get("/", async (req: Request, res: Response) => {
	try {
		const stakings: Staker[] = await StakingSvc.findAll();
		res.status(200).json(stakings);
	} catch (e) {
		res.status(500).send(e);
	}
});

stakingRouter.get("/:token", async (req: Request, res: Response) => {
	const token: string = req.params.token;

	try {
		const staking: Staker | undefined = await StakingSvc.findOne(token);
		if (staking) {
			res.status(200).json(staking);
		} else {
			res.status(404).send(new Error("Not found"));
		}
	} catch (e) {
		res.status(500).send(e);
	}
});
