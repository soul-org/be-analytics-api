export interface Staker {
	token: string;
	validators: Validator[]
}

export interface Validator {
	commission: number;
	apy: number;
	address: string;
}
