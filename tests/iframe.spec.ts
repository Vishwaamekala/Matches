import {test, expect} from '@playwright/test';

test('Iframe test', async ({ page }) => {
    await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    await expect(page).toHaveURL('https://automationpracticehubapp.netlify.app/')

    await page.locator("#nav-advanced-elements").click()

    const frame = await page.frameLocator('iframe-section')

    await frame.locator('#iframe-input').fill('Hello Iframe')

    await frame.locator('#iframe-submit').click()

    await expect(frame.locator('#iframe-message')).toHaveText('Submitted: Hello')
   // await page.frameLocator('child-iframe')

})

test.only('Child frames in the frames', async({page}) => {
 await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    await expect(page).toHaveURL('https://automationpracticehubapp.netlify.app/')

    await page.locator("#nav-advanced-elements").click()

    const childFrame = await page.frameLocator('#parent-iframe').frameLocator('#child-iframe')

    await childFrame.locator('#child-iframe-input').fill('sdfa')

    await childFrame.locator('#child-iframe-submit').click()

    await expect(childFrame.locator('#child-iframe-message')).toHaveText('Child submitted: sdfa')

})