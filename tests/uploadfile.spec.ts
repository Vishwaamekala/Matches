import {test, expect} from '@playwright/test';

test('Uploading the file', async ({page}) => {
    await page.goto('https://practice.expandtesting.com/upload')


    const filePath = 'Upload/vishwaamk_photo.jpg';
    await page.getByTestId('file-input').setInputFiles(filePath)
    await page.getByTestId('file-submit').click()

})

test.only('Child window handling', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'OrangeHRM, Inc' }).click()
    ])
    await newPage.waitForLoadState()
   // await expect((newPage).title()).toEqual('OrangeHRM HR Software | Free & Open Source HR Software | OrangeHRM')   
    await expect(newPage).toHaveTitle('OrangeHRM: All in One HR Software for Businesses | OrangeHRM')
    await newPage.bringToFront()
   // await expect(newPage.title()).toBe('OrangeHRM')
   await expect(page).toHaveTitle('OrangeHRM')
})

test("validating dropdown values", async({page}) => {
await page.goto('')
})