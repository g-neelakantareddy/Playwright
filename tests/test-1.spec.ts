import { test, expect } from '@playwright/test';

test('A/B Testing', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'A/B Testing' }).click();
  await page.getByText('Also known as split testing.').click();
  await page.goBack({waitUntil : "domcontentloaded"});
});
test("Add/Remove Element", async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Add/Remove Elements' }).click();
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
  await page.goBack({waitUntil : "domcontentloaded"});
});
test("Basic Auth", async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Basic Auth' }).click();
  await page.goBack({waitUntil : "domcontentloaded"});
});
test("Broken images", async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/');
  await page.getByRole('link', { name: 'Broken Images' }).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('img').nth(2).click();
  await page.getByRole('img').nth(3).click();
  await page.goBack({waitUntil : "domcontentloaded"});
});