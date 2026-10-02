import {test, expect} from "@playwright/test"

test("Aler handling prompt confirm and prompt", async ({page}) =>{
    await page.goto('https://automationpracticehubapp.netlify.app/')
    await page.locator('#login-username').fill('Admin')
    await page.locator('#login-password').fill('Hello@123')
    await page.locator("button[id='login-submit'] span").click()

     await page.locator("#nav-advanced-elements").click()
   // await expect(page).toHaveURL('https://automationpracticehubapp.netlify.app/')
    
    page.once('dialog', async a => {
        expect(a.type()).toBe('alert')
        expect(a.message()).toContain('This is a simple alert!')
        await a.accept()
    })

    await page.locator("#simple-alert-btn").click()

    
    page.once('dialog', async b => {
        expect(b.type()).toBe('confirm')
        expect(b.message()).toContain('Do you confirm this action?')
        await b.dismiss()
    })

    await page.getByTestId('confirm-alert-btn').click()

    page.once('dialog', async c => {
        expect(c.type()).toBe('prompt')
        await c.accept('Hello World')
    })

    await page.locator("#prompt-alert-btn").click()

})