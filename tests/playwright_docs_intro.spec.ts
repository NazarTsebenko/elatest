import { test, expect } from '@playwright/test';

// Test suite for Playwright Docs Intro page

test.describe('Playwright Docs Intro Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');
  });

  test('should have correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Installation | Playwright');
  });

  test('should have a visible Playwright logo', async ({ page }) => {
    const logo = page.locator('img[alt="Playwright logo"]');
    await expect(logo).toBeVisible();
  });

  test('should have a visible Docs link', async ({ page }) => {
    const docsLink = page.locator('a', { hasText: 'Docs' });
    await expect(docsLink).toBeVisible();
  });

  test('should have a visible API link', async ({ page }) => {
    const apiLink = page.locator('a', { hasText: 'API' });
    await expect(apiLink).toBeVisible();
  });

  test('should have a visible Community link', async ({ page }) => {
    const communityLink = page.locator('a', { hasText: 'Community' });
    await expect(communityLink).toBeVisible();
  });

  test('should have a visible GitHub repository link', async ({ page }) => {
    const githubLink = page.locator('a', { hasText: 'GitHub repository' });
    await expect(githubLink).toBeVisible();
  });

  test('should have a visible Discord server link', async ({ page }) => {
    const discordLink = page.locator('a', { hasText: 'Discord server' });
    await expect(discordLink).toBeVisible();
  });

  test('should have a visible Search button', async ({ page }) => {
    const searchButton = page.locator('button', { hasText: 'Search' });
    await expect(searchButton).toBeVisible();
  });

  test('should have a visible Installation heading', async ({ page }) => {
    const heading = page.locator('h1', { hasText: 'Installation' });
    await expect(heading).toBeVisible();
  });

  test('should have a visible Introduction section', async ({ page }) => {
    const introduction = page.locator('h2', { hasText: 'Introduction' });
    await expect(introduction).toBeVisible();
  });

  test('should have a visible Installing Playwright section', async ({ page }) => {
    const installing = page.locator('h2', { hasText: 'Installing Playwright' });
    await expect(installing).toBeVisible();
  });

  test('should have a visible System requirements section', async ({ page }) => {
    const systemRequirements = page.locator('h2', { hasText: 'System requirements' });
    await expect(systemRequirements).toBeVisible();
  });
});
