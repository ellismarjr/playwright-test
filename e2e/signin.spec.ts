import { test, expect } from '@playwright/test';

test.describe('Signin', () => {
  test('should be able to show all elements', async ({ page }) => {
    await page.goto('/login');
    await expect(page.getByText('E-mail')).toBeVisible();
    await expect(page.getByPlaceholder('E-mail')).toBeVisible();
    await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByPlaceholder('********')).toBeVisible();
    await expect(page.getByRole('button', { name: 'SIGNIN' })).toBeVisible();
  });

  test('should be able to signin when fullfil all fields', async ({ page }) => {
    await page.goto('/login');
    await page.getByPlaceholder('E-mail').fill('john.doe@email.com');
    await page.getByPlaceholder('********').fill('123456');
    await page.getByRole('button', { name: 'SIGNIN' }).click();
    await expect(page.getByText('Welcome to your workspace!')).toBeVisible();
    await expect(page.getByText('Enjoy your adventure.')).toBeVisible();
  });
});

