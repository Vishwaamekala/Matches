import { test, expect } from '@playwright/test'

test('Hover on the mouse', async ({ page }) => {
    await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    // await page.locator("#nav-advanced-elements").click()

    const hoverArea = page.locator('#hover-area')
    await hoverArea.hover()

    const hoverText = await hoverArea.innerText()
    console.log(hoverText)

    await expect(hoverArea).toHaveText('Hover over me')

    //perform double click operation on button

    const doubleClickButton = page.locator('#double-click-btn');
    await doubleClickButton.dblclick();

    const message = page.locator('#double-click-message');

    await expect(message).toHaveText('Double click detected successfully!');
    await page.screenshot({path: "test-results/mouse.jpeg"})
    console.log(await message.innerText());

})

