import { macuas } from './macuas';

const mobileUA = [
	{
		viewport: { width: 375, height: 812 },
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15A372 Safari/604.1',
	},
	{
		viewport: { width: 360, height: 740 },
		userAgent:
			'Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
	},
	{
		viewport: { width: 411, height: 731 },
		userAgent:
			'Mozilla/5.0 (Linux; Android 9; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
	},
	{
		viewport: { width: 375, height: 812 },
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1',
	},
	{
		viewport: { width: 360, height: 740 },
		userAgent:
			'Mozilla/5.0 (Linux; Android 8.0.0; SM-G960F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
	},
	{
		viewport: { width: 375, height: 812 },
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 12_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/16B92 Safari/604.1',
	},
	{
		viewport: { width: 412, height: 732 },
		userAgent:
			'Mozilla/5.0 (Linux; Android 7.0; Nexus 5X Build/NBD90W) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
	},
	{
		viewport: { width: 375, height: 812 },
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
	},
	{
		viewport: { width: 412, height: 732 },
		userAgent:
			'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 6P Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Mobile Safari/537.36',
	},
	{
		viewport: { width: 375, height: 667 },
		userAgent:
			'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
	},
];

function randomDesktopViewPort(): { width: number; height: number } {
	const desktopAspectRatios = [
		{ width: 1920, height: 1080 }, // 16:9
		{ width: 2560, height: 1440 }, // 16:9
		{ width: 3840, height: 2160 }, // 16:9
		{ width: 1280, height: 720 }, // 16:9
		{ width: 1366, height: 768 }, // 16:9
		{ width: 1440, height: 900 }, // 16:10
		{ width: 1680, height: 1050 }, // 16:10
		{ width: 1920, height: 1200 }, // 16:10
		{ width: 2560, height: 1600 }, // 16:10
		{ width: 1280, height: 800 }, // 16:10
	];
	const randomIndex = Math.floor(Math.random() * desktopAspectRatios.length);
	return desktopAspectRatios[randomIndex];
}

export function desktopUAs() {
	const desktopUA = [
		{
			platform: 'Windows',
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Windows',
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0',
			browser: 'Firefox',
		},
		{
			platform: 'Windows',
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Edge/91.0.864.59',
			browser: 'Edge',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
			browser: 'Safari',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7; rv:89.0) Gecko/20100101 Firefox/89.0',
			browser: 'Firefox',
		},
		{
			platform: 'Linux',
			userAgent:
				'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Linux',
			userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:89.0) Gecko/20100101 Firefox/89.0',
			browser: 'Firefox',
		},
		{
			platform: 'Linux',
			userAgent:
				'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Windows',
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Windows',
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:90.0) Gecko/20100101 Firefox/90.0',
			browser: 'Firefox',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.1 Safari/605.1.15',
			browser: 'Safari',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.107 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Linux',
			userAgent:
				'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Linux',
			userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0',
			browser: 'Firefox',
		},
		{
			platform: 'Windows',
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Windows',
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0',
			browser: 'Firefox',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_5) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15',
			browser: 'Safari',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Linux',
			userAgent:
				'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Linux',
			userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:92.0) Gecko/20100101 Firefox/92.0',
			browser: 'Firefox',
		},
		{
			platform: 'Windows',
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
			browser: 'Chrome',
		},
		{
			platform: 'Windows',
			userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:92.0) Gecko/20100101 Firefox/92.0',
			browser: 'Firefox',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Safari/605.1.15',
			browser: 'Safari',
		},
		{
			platform: 'Mac',
			userAgent:
				'Mozilla/5.0 (Macintosh; Intel Mac OS X 11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
			browser: 'Chrome',
		},
	];

	return desktopUA.map(item => {
		return {
			platform: item.platform,
			viewport: randomDesktopViewPort(),
			userAgent: item.userAgent,
		};
	});
}

function macs() {
	//return macuas;
	return desktopUAs().filter(i => i.platform === 'Mac');
}

export function allUAs() {
	return [...macs(), ...desktopUAs(), ...mobileUA];
}
