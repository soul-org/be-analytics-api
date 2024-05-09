import request from "supertest";

import app from "../src/app";

describe("Staking", () => {
	describe("GET /stake", () => {
		test("Should return all stakers", async () => {
			const res = await request(app).get("/api/stake");
			expect(res.status).toBe(200);
		});
	});

	describe("GET /stake/MATIC", () => {
		test("Should return stakers for MATIC", async () => {
			const res = await request(app).get("/api/stake/MATIC");
			expect(res.status).toBe(200);
		});
	});
});
