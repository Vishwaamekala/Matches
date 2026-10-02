import {test, expect} from '@playwright/test';

test('iframes test', async ({ page }) => {
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
    const frame2 = await page.frameLocator("//frame[@name='packageListFrame']");
    await frame2.locator("//a[text()='java.applet']").click();

    //await page.pause();
});

test("Working with multi tabs", async ({ browser }) => {
    const context = await browser.newContext();
        const page = await context.newPage();
    //Click a link on Need help link it will open a new tab
       await page.goto("https://freelance-learn-automation.vercel.app/login");
   
   const [newPage] = await Promise.all
   (
    [
    context.waitForEvent('page'),
    //context.waitForEvent('page'),
    page.locator("div[class='container-child'] a:nth-child(4)").click()
      //     page.getByRole('link', { name: 'facebook' }).click()
   ]
)
await newPage.waitForLoadState();
await newPage.locator("//span[text()='Email address or phone number']").fill("test@example.com");
await newPage.close();
await page.locator("#email1").fill("vishwaa@sdkf.com")
await page.pause();
})

// The same multi-tab flow using page.on('popup').
test.only("Working with multi tabs using page.on", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    let popupPage;
    const popupPromise = new Promise<typeof page>((resolve) => {
        const popupHandler = (newPage: typeof page) => {
            page.off('popup', popupHandler);
            resolve(newPage);
        };

        page.on('popup', popupHandler);
    });

    await page.locator("div[class='container-child'] a:nth-child(4)").click();

    popupPage = await popupPromise;
    await popupPage.waitForLoadState();
    await popupPage.getByRole('textbox', { name: /email address or phone number/i }).fill("test@example.com");
    await popupPage.close();

    await page.locator("#email1").fill("vishwaa@sdkf.com");
    await context.close();
});