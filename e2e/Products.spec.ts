import { test, expect } from '@playwright/test';

test.describe('Products', () => {
  test('should be able to show all products', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Products')).toBeVisible();
  });
});

