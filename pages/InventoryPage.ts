import {test, expect, Locator, Page} from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly inventoryHeader: Locator
    readonly inventoryItem: Locator;
    readonly inventoryItems1: Locator;
    readonly cartItemsLocator: Locator;

    constructor(page: Page) {
        this.page = page;
       // this.inventoryHeader = page.getByRole('heading', { name: 'Swag Labs' });
        this.inventoryHeader = page.locator("div.app_logo");
        this.inventoryItem = page.locator("#add-to-cart-sauce-labs-backpack");
        this.inventoryItems1 = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.cartItemsLocator = page.getByLabel("Cart");
    }   

    async inventoryHeaderIsVisible(): Promise<void> {
        await expect(this.inventoryHeader).toBeVisible();
    }

    async inventoryItems(): Promise<void> {
        await expect(this.inventoryItem).toBeVisible();
        await this.inventoryItem.first().click();
    }

    async inventoryItemss1(): Promise<void> {
        await expect(this.inventoryItems1).toBeVisible();
        await this.inventoryItems1.click();
    }

    async cartItems(): Promise<void> {
        await expect(this.cartItemsLocator).toBeVisible();
        await this.cartItemsLocator.click();
    }
}

