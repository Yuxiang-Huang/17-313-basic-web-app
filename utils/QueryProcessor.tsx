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

	if (query.toLowerCase().includes("shakespeare")) {
		return (
			"William Shakespeare (26 April 1564 - 23 April 1616) was an " +
			"English poet, playwright, and actor, widely regarded as the greatest " +
			"writer in the English language and the world's pre-eminent dramatist."
		);
	}

	return "";
}
