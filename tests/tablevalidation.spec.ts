import { test, expect } from '@playwright/test'

test('Reading table values', async ({ page }) => {
    await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

    await page.locator("#nav-advanced-elements").click()

    //await page.screenshot({ path: 'test-results/title.png', fullPage: true });

    await page.screenshot({ path: 'test-results/title.png'});

    await expect(page).toHaveTitle('You Can Do it')
    //await expect(page).toHaveScreenshot()
await page.screenshot({ path: 'test-results/title.png'});

    const statictable = page.locator('table').first();
    await expect(statictable).toBeVisible();

    await statictable.screenshot({ path: 'test-results/table.png' });

    const rows = statictable.locator('tbody tr');
    const count = await rows.count();
    console.log("Row count:", count);

    const onlyEngineers = rows.filter({ hasText: 'Engineering' })

    const onlyEngineeringCount = await onlyEngineers.count()
    console.log("Engineering count ", onlyEngineeringCount)

    const salaryTexts = await statictable.locator('tbody tr td:nth-child(4)').allTextContents()
    console.log(salaryTexts)

    const salaries = salaryTexts.map(s => Number(s.replace(/[$,]/g,"")))

    console.log('Highest salary', Math.max(...salaries))
    console.log('Highest salary', Math.min(...salaries))



})