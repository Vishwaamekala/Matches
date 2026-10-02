import {test, expect} from '@playwright/test'

test('pagination with next button clicking until it is disable', async({page}) =>{
    await page.goto('https://www.testmuai.com/selenium-playground/table-sort-search-demo/')
    await page.waitForLoadState('networkidle')

    while(true){
        const clickNextbtn = await page.locator('#example_next')

       if(await clickNextbtn.isDisabled()){
        break;
       } else{
        await clickNextbtn.click()
        await page.waitForTimeout(1000)
        break
       }
    }
})

test.only('Without next button only pages available', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/p/playwrightpractice.html')

    const pages = await page.locator('#pagination li a')
    const pagecount = await pages.count()

    await pages.first().scrollIntoViewIfNeeded({timeout:1000})
    for(let i=1; i < pagecount; i++){
        await pages.nth(i).click()
        await page.waitForTimeout(1000)
    }
})