// playwright-gallery.spec.js
// Playwright test: open the gallery and click the first image
const { test, expect } = require('@playwright/test');

test('Open gallery and click first image', async ({ page }) => {
  await page.goto('https://refactored-space-bassoon-77q7jx7pvxq3w6rw-3000.app.github.dev/html/index.html');
  // Wait for gallery to load
  await expect(page.locator('.gallery')).toBeVisible();
  // Click the first image
  const firstImage = page.locator('.polaroid img').first();
  await firstImage.click();
  // Optionally, check if the image is focused or active (minimal JS, so just check click works)
  // You can add more assertions here if needed
});
