import { pickRandom } from './tools/arrays';

export function iphoneUA() {
	return 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1';
}
// function iphoneUA() {
// 	const r = (val: number) => {
// 		return String(val).replace('.', '_');
// 	};
// 	const versions = [17.6, 17.5, 17.4, 17.3, 17.2, 17.1, 17.0, 16.6, 16.5];
// 	const picked = pickRandom(versions);
// 	return `Mozilla/5.0 (iPhone; CPU iPhone OS ${r(picked)} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/${picked} Mobile/15A372 Safari/604.1`;
// }

function iphoneAspectRatios() {
	const iphoneRatios = [
		{ model: 'iPhone 8', viewport: { width: 375, height: 667 } },
		{ model: 'iPhone 8 Plus', viewport: { width: 414, height: 736 } },
		{ model: 'iPhone X', viewport: { width: 375, height: 812 } },
		{ model: 'iPhone XS', viewport: { width: 375, height: 812 } },
		{ model: 'iPhone XS Max', viewport: { width: 414, height: 896 } },
		{ model: 'iPhone XR', viewport: { width: 414, height: 896 } },
		{ model: 'iPhone 11', viewport: { width: 414, height: 896 } },
		{ model: 'iPhone 11 Pro', viewport: { width: 375, height: 812 } },
		{ model: 'iPhone 11 Pro Max', viewport: { width: 414, height: 896 } },
		{ model: 'iPhone 12 Mini', viewport: { width: 360, height: 780 } },
		{ model: 'iPhone 12', viewport: { width: 390, height: 844 } },
		{ model: 'iPhone 12 Pro', viewport: { width: 390, height: 844 } },
		{ model: 'iPhone 12 Pro Max', viewport: { width: 428, height: 926 } },
		{ model: 'iPhone 13 Mini', viewport: { width: 375, height: 812 } },
		{ model: 'iPhone 13', viewport: { width: 390, height: 844 } },
		{ model: 'iPhone 13 Pro', viewport: { width: 390, height: 844 } },
		{ model: 'iPhone 13 Pro Max', viewport: { width: 428, height: 926 } },
	];
	return iphoneRatios;
}

export function iphoneRandom() {
	return {
		viewport: pickRandom(iphoneAspectRatios()).viewport,
		userAgent: iphoneUA(),
	};
}
