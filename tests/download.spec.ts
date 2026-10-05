/// <reference types="node" />

import path from 'path';
import { test } from '@playwright/test';


test('download file', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/download');

  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('link', { name: 'download.PNG' }).click();

  const downloadFile = await downloadEvent;
  await downloadFile.saveAs(
    path.join(__dirname, '..', 'downloads', downloadFile.suggestedFilename())
  );
});