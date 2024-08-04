const rootURL = 'https://oink.news';

import { chromium, firefox, type Browser } from 'playwright';
import { sleep } from './tools/promises';
import { randomNum } from './tools/random';
import { allUAs } from './ua';
import { pickRandom } from './tools/arrays';

type UATYPE = {
	viewport: {
		width: number;
		height: number;
	};
	userAgent: string;
};

async function launchPage(browser: Browser, goTo: string) {
	await sleep(4);
	const UAs: UATYPE[] = allUAs();
	const selected = UAs[Math.floor(Math.random() * UAs.length)];
	const page = await browser.newPage({
		colorScheme: pickRandom(['dark', 'light']),
		userAgent: selected.userAgent,
		viewport: selected.viewport,
	});

	// await page.evaluate(() => {
	// 	localStorage.clear();
	// 	sessionStorage.clear();
	// });

	try {
		console.log(`start: ${goTo}`);

		await page.goto(goTo);

		// Find a random URL on the same domain and visit it
		const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));

		const sameDomainLinks = links.filter(link => link.includes('articles'));

		if (sameDomainLinks.length > 0) {
			const randomLink = sameDomainLinks[Math.floor(Math.random() * sameDomainLinks.length)];
			const clickLink = `a[href="${new URL(randomLink).pathname}"]`;
			console.log(`visit: ${clickLink}`);
			await page.click(clickLink);
			await page.waitForURL(randomLink);
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
			await sleep(800);
			const randomLinkAgain = sameDomainLinks[Math.floor(Math.random() * sameDomainLinks.length)];
			await page.goto(randomLinkAgain);
			await sleep(500);
			console.log(`visited ${randomLink}, ${randomLinkAgain}`);
		}
	} catch (err) {
		console.log((err as Error).message);
	} finally {
		page.close();
	}
}

async function visitUrl(goTo: string, counter = 0) {
	async function roll() {
		const pagePromises = [];
		for (let i = 0; i < 2; i++) {
			await sleep(100);
			pagePromises.push(launchPage(browser, goTo));
		}
		await Promise.all(pagePromises);
	}

	const browser = await firefox.launch();
	await roll();
	await roll();
	await browser.close();

	process.on('SIGINT', async () => {
		await browser.close();
		console.log('Browser closed due to SIGINT');
		process.exit(0);
	});

	process.on('SIGTERM', async () => {
		await browser.close();
		console.log('Browser closed due to SIGTERM');
		process.exit(0);
	});
}

async function main() {
	const times = 2;
	const promises = [];
	for (let i = 0; i < times; i++) {
		promises.push(visitUrl(rootURL, 0));
	}
	await Promise.all(promises);
	console.log('finished');
	process.exit(0);
}

main();
