import {test, expect} from '@playwright/test'

test('multiple windows', async ({context, page}) => {

    const newtabsPromise = page.waitForEvent('popup')
    await page.goto('https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')


    await page.locator("//a[text()='Need help?']").click()
    const popup = await newtabsPromise

    await popup.locator("//input[@type='submit' and @data-action-type='DISMISS']").click()

   })

   //Using page on i want to handle popup window

   test('handling popup window using page on', async ({ page }) => {
    await page.goto('https://www.amazon.com/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3Fref_%3Dnav_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0')

    const [popup] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("a:has-text('Need help?')").click(),
    ])

    await popup.waitForLoadState('domcontentloaded')
    await popup.locator("input[type='submit'][data-action-type='DISMISS']").click()
   })