export default function getEnding(number: number, endings: [string, string, string]) {
	const cases = [2, 0, 1, 1, 1, 2]
	const ending = `${endings[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]]}`
	return ending
}
