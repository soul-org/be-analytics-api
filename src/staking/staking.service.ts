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
		address: "0xAFfb23A344B7ebdf4Ea6B5ec27ECC00D12fecd77",
		commission: 5,
		apy: 10,
	},
	{
		token: "AVAX",
		address: "NodeID-4KXitMCoE9p2BHA6VzXtaTxLoEjNDo2Pt",
		commission: 20,
		apy: 6.6,
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
