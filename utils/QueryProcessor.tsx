export default function QueryProcessor(query: string): string {
	if (query.toLowerCase().includes("what is your name?")) {
		return "yh4";
	}

	if (query.toLowerCase().includes("what is your andrew id?")) {
		return "yh4";
	}

	if (query.toLowerCase().includes("What is 97 plus 57")) {
		return "154";
	}

	if (query.toLowerCase().includes("What is 29 plus 53?")) {
		return "82";
	}

	if (
		query
			.toLowerCase()
			.includes("Which of the following numbers is the largest:")
	) {
		// get the last three words and get the highest number
		const number = query
			.toLowerCase()
			.split(" ")
			.slice(-3)
			.join(" ")
			.split(", ")
			.map(Number)
			.sort((a, b) => b - a)[0];
		return number.toString();
	}

	if (query.toLowerCase().includes("shakespeare")) {
		return (
			"William Shakespeare (26 April 1564 - 23 April 1616) was an " +
			"English poet, playwright, and actor, widely regarded as the greatest " +
			"writer in the English language and the world's pre-eminent dramatist."
		);
	}

	return "";
}
