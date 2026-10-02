import {test, expect} from '@playwright/test';

test('Dynamic network call test', async ({ page }) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.locator('.subLink').click();
    await page.waitForLoadState('networkidle');
    const count = await page.locator("//input[@type='checkbox']").getByText("checkbox").count();
    console.log("Total checkboxes on the page: " + count);

})