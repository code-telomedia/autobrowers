export function pickRandom<T>(val: T[]): T {
	const randomIndex = Math.floor(Math.random() * val.length);
	return val[randomIndex];
}
