import { test, expect } from './fixtures';

test('Login test', async ({ loginPage, loginData }) => {
  await loginPage.open(loginData.url);
  await loginPage.login(loginData.username, loginData.password);
  await expect(loginPage.page).toHaveURL(`${loginData.url}inventory.html`);
});

test.only('Inventory items added on the page', async ({ loginPage, loginData, inventorypage }) => {
  await loginPage.open(loginData.url);
  await loginPage.login(loginData.username, loginData.password);
  //const inventoryPage = new InventoryPage(loginPage.page);
  await inventorypage.inventoryHeaderIsVisible();
  await inventorypage.inventoryItems();
  await inventorypage.inventoryItemss1();
  await inventorypage.cartItems();
  await expect(inventorypage.page).toHaveURL(`${loginData.url}cart.html`);
});