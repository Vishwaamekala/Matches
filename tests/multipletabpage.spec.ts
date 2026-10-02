import {test, expect} from '@playwright/test';

test('Iframe test', async ({ page, context }) => {
    await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    await expect(page).toHaveURL('https://automationpracticehubapp.netlify.app/')

    await page.locator("#nav-advanced-elements").click()

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("#open-window-btn").click()
    ]);

    const heading = newpage.locator('#popup-heading');

    console.log(await heading.innerText())

})

test.only('Multiple windows popup', async ({context, page}) =>{
await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    await expect(page).toHaveURL('https://automationpracticehubapp.netlify.app/')

    await page.locator("#nav-advanced-elements").click()

   // const parent = page;
    await page.locator('#open-multi-windows-btn').click()

    await expect.poll(() => context.pages().length).toBe(4);

    const pages = context.pages()

    for(let i=1; i<pages.length; i++){
        console.log(await pages[i].title())
    }


})
