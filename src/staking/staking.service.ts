/**
 * Data Model Interfaces
 */

import type { Staker } from "./staking.interface";

/**
 * In-Memory Store
 */

const stakers: Staker[] = [
	{
		token: "MATIC",
		address: "0x01",
		commission: 5,
		apy: 10,
	},
	{
		token: "AVAX",
		address: "0x01",
		commission: 5,
		apy: 10,
	},
];

/**
 * Service Methods
 */

export const findOne = async (token: string): Promise<Staker | undefined> => {
	return stakers.find((index) => index.token === token);
};

export const findAll = async (): Promise<Staker[]> => {
	const response = [...stakers];
	return response;
};
