export function sleep(num: number) {
	return new Promise(resolve => {
		setTimeout(resolve, num);
	});
}
