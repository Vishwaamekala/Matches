import {test, expect} from '@playwright/test'
//import {fileURLToPath} from 'node:url'
//import path from 'path'

test('Uploading the file', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/upload")

    const filePath = "D:\\e\\Shipping\\files\\vishwaamk_photo.jpg"
    await page.setInputFiles("#file-upload", filePath)

    await page.locator("#file-submit").click()
    await expect(page.locator("h3")).toHaveText("File Uploaded!")
})


//To download the file

