import { chromium, type ElementHandle } from 'playwright';
import { sleep } from './tools/promises';
import { randomNum } from './tools/random';
import { allUAs } from './ua';
import { iphoneRandom } from './iua';

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

export async function launch() {
	console.log('launching');
	const browser = await chromium.launch();
	const selected = iphoneRandom();

	const page = await browser.newPage({
		userAgent: selected.userAgent,
		viewport: selected.viewport,
	});

	console.log('goto root url');
	await page.goto(rootURL);
	await page.evaluate(() => {
		window.scrollBy(0, window.innerHeight);
	});

	console.log('find iframes');
	const locator = page.frameLocator('iframe[aria-label="Advertisement"]').first();
	// await locator
	await browser.close();
}

launch();
