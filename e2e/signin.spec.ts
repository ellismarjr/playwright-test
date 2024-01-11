import { test, expect } from '@playwright/test';

test.describe('Signin', () => {
  test('should be able to show all elements', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('E-mail')).toBeVisible();
    await expect(page.getByPlaceholder('E-mail')).toBeVisible();
    await expect(page.getByText('Password')).toBeVisible();
    await expect(page.getByPlaceholder('********')).toBeVisible();
    await expect(page.getByRole('button', { name: 'SIGNIN' })).toBeVisible();
  });

  test('should signin when fullfil all fields', async ({ page }) => {
    await page.goto('/');
    await page.getByPlaceholder('E-mail').fill('john.doe@email.com');
    await page.getByPlaceholder('********').fill('123456');
  });
});

