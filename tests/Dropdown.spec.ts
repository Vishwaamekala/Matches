import { test, expect } from '@playwright/test'

test('Reading table values', async ({ page }) => {
    await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    //await page.waitForTimeout(3000)

    await page.locator("#country-dropdown").scrollIntoViewIfNeeded({timeout: 30000})
      
    await page.locator("#country-dropdown").selectOption('India')

    
    const multiselect = await page.locator('.multi-select-trigger')
    await multiselect.click()

    await page.getByRole("option", {name: "JavaScript"}).click();
    await page.getByRole("option", {name: "TypeScript"}).click()
    
        await page.screenshot({ path: 'test-results/title.png'});

        await expect(page.locator("#skills-dropdown")).toContainText('JavaScript')
        await expect(page.locator("#skills-dropdown")).toContainText('TypeScript')

        const dynamicSearch = await page.getByTestId('searchable-dropdown')
        await dynamicSearch.fill('React')

        await page.getByRole("option", {name: "React", exact: true}).click()

        await expect(dynamicSearch).toHaveValue('React')

})