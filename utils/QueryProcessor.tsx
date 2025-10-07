export default function QueryProcessor(query: string): string {
	console.log(query);

	if (query.toLowerCase().includes("what is your name?")) {
		return "yh4";
	}

	if (query.toLowerCase().includes("what is your andrew id?")) {
		return "yh4";
	}

	// What is 29 plus 53?
	if (query.toLowerCase().includes("plus")) {
		// get the thrid and fourth words and get the sum
		const numbers = query.toLowerCase().split(" ");
		const number1 = parseInt(numbers[2]);
		// remove the quesiton mark, which is the last character
		const number2 = parseInt(numbers[4].slice(0, -1));
		const sum = number1 + number2;
		return sum.toString();
	}

	// if (
	// 	query
	// 		.toLowerCase()
	// 		.includes("which of the following numbers is the largest:")
	// ) {
	// 	return "80";
	// 	console.log(query);
	// 	// get the last three words and get the highest number
	// 	const numbers = query
	// 		.toLowerCase()
	// 		.split(" ")
	// 		.slice(-3)
	// 		.join(" ")
	// 		.split(", ")
	// 		.map(Number)
	// 		.sort((a, b) => b - a)[0];

	// 	return numbers.toString();
	// }

	if (query.toLowerCase().includes("shakespeare")) {
		return (
			"William Shakespeare (26 April 1564 - 23 April 1616) was an " +
			"English poet, playwright, and actor, widely regarded as the greatest " +
			"writer in the English language and the world's pre-eminent dramatist."
		);
	}

	return "";
}
