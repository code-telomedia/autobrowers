import { chromium, type Browser, type ElementHandle, type Locator, type Page } from 'playwright';
import { sleep } from './tools/promises';
import { randomNum } from './tools/random';
import { allUAs, desktopUAs } from './ua';
import { iphoneRandom } from './iua';
import { pickRandom } from './tools/arrays';

type UATYPE = {
	viewport: {
		width: number;
		height: number;
	};
	userAgent: string;
};

const rootURL = 'https://oink.news';

async function runFrame(theFrame: ElementHandle<HTMLIFrameElement>) {
	const [height, width] = [
		await theFrame.evaluate(iframe => iframe.clientHeight),
		await theFrame.evaluate(iframe => iframe.clientWidth),
	];
	console.log(`frame size`, height, width);
	const frameContent = await theFrame.contentFrame();
	if (frameContent) {
		const links = await frameContent.$$('div');
		console.log(links);
		// for (const link of links) {
		// 	const href = await link.getAttribute('href');
		// 	console.log(`Link found: ${href}`);
		// }
	} else {
		console.log('no frame content');
	}
}

export async function focusss(page: Page) {
	async function pick(loc: Locator, count: number) {
		console.log(`hover-------${count}`)
		// await loc.scrollIntoViewIfNeeded({ timeout: 100});
		//await loc.hover();
	}
	await page.evaluate(() => {
		window.scrollBy(0, window.innerHeight);
	});
	const locator = page.locator('iframe[aria-label="Advertisement"]');
	const count = await locator.count()
	for (let index = 0; index < count; index++) {
		await pick(locator.nth(index), index)
	}
}
