import QueryProcessor from "../../utils/QueryProcessor";
import "@testing-library/jest-dom";

describe("QueryProcessor", () => {
	test("should return a string", () => {
		const query = "test";
		const response: string = QueryProcessor(query);
		expect(typeof response).toBe("string");
	});

	test("should return shakespeare description", () => {
		const query = "shakespeare";
		const response: string = QueryProcessor(query);
		expect(response).toBe(
			"William Shakespeare (26 April 1564 - 23 April 1616) was an " +
				"English poet, playwright, and actor, widely regarded as the greatest " +
				"writer in the English language and the world's pre-eminent dramatist.",
		);
	});

	test("should return name", () => {
		const query = "What is your name?";
		const response: string = QueryProcessor(query);
		expect(response).toBe("yh4");
	});

	test("should return Andrew ID", () => {
		const query = "What is your Andrew ID?";
		const response: string = QueryProcessor(query);
		expect(response).toBe("yh4");
	});

	test("should return largest number", () => {
		const query = "Which of the following numbers is the largest: 1, 2, 3?";
		const response: string = QueryProcessor(query);
		expect(response).toBe("3");
	});

	test("should return largest number", () => {
		const query = "Which of the following numbers is the largest: 23, 100, 10?";
		const response: string = QueryProcessor(query);
		expect(response).toBe("100");
	});

	test("should return the sum of two numbers", () => {
		const query = "What is 1 plus 2?";
		const response: string = QueryProcessor(query);
		expect(response).toBe("3");
	});

	test("should return the sum of two numbers", () => {
		const query = "What is 23 plus 76?";
		const response: string = QueryProcessor(query);
		expect(response).toBe("99");
	});
});
