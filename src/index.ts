const rootURL = 'https://oink.news';

import { chromium, firefox, type Browser } from 'playwright';
import { sleep } from './tools/promises';
import { randomNum } from './tools/random';
import { allUAs } from './ua';
import { pickRandom } from './tools/arrays';
import { yick } from './click';

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
		await page.goto(goTo);
		await page.evaluate(() => {
			window.scrollTo(0, Math.random() * document.body.scrollHeight);
		});

		// Find a random URL on the same domain and visit it
		const links = await page.$$eval('a', anchors => anchors.map(anchor => anchor.href));

		const sameDomainLinks = links.filter(link => link.includes('articles'));

		if (sameDomainLinks.length > 0) {
			const randomLink = sameDomainLinks[Math.floor(Math.random() * sameDomainLinks.length)];
			const clickLink = `a[href="${new URL(randomLink).pathname}"]`;
			console.log(`visit 1: ${clickLink}`);
			await page.click(clickLink);
			await page.waitForURL(randomLink);
			await page.evaluate(() => {
				window.scrollTo(0, document.body.scrollHeight);
			});
			await sleep(randomNum(500, 1100));
			const randomLinkAgain = sameDomainLinks[Math.floor(Math.random() * sameDomainLinks.length)];
			await page.goto(randomLinkAgain);
			await sleep(randomNum(500, 1100));
			console.log(`visit 2: ${randomLink}, ${randomLinkAgain}`);
		}
	} catch (err) {
		console.log((err as Error).message);
	} finally {
		await page.close();
	}
}

async function visitUrl(browser: Browser, goTo: string, counter = 0) {
	async function roll() {
		const pagePromises = [];
		for (let i = 0; i < 12; i++) {
			pagePromises.push(launchPage(browser, goTo));
		}
		await Promise.all(pagePromises);
	}

	await roll();
}

async function main() {
	console.log('launch');
	const browser = await chromium.launch();
	await visitUrl(browser, rootURL, 0);
	// promises.push(yick());
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

	await browser.close();
	console.log('finished');
	process.exit(0);
}

main();
