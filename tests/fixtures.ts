import { test as base } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';


export type LoginData = {
  url: string;
  username: string;
  password: string;
};

const environment = process.env.TEST_ENV ?? 'qa';
const supportedEnvironments = ['dev', 'qa', 'preprod']; //is this tupple or array

if (!supportedEnvironments.includes(environment)) {
  throw new Error(`Unsupported TEST_ENV: ${environment}. Use dev, qa, or preprod.`);
}

const dataPath = path.resolve(__dirname, `login-data.${environment}.json`);
const loginData = JSON.parse(fs.readFileSync(dataPath, 'utf-8')) as LoginData;

type Fixtures = {
  loginPage: LoginPage;
  inventorypage: InventoryPage;
  loginData: LoginData;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  loginData: async ({}, use) => {
    await use(loginData);
  },
    inventorypage: async ({page}, use) => {
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';
