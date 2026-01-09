import { test, expect } from '@playwright/test';

test.describe('Playwright Intro Page Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/docs/intro');
    await page.setViewportSize({ width: 1920, height: 1080 });
  });

  test('Verify page title', async ({ page }) => {
    await expect(page).toHaveTitle('Installation | Playwright');
  });

  test('Verify main navigation links', async ({ page }) => {
    const docsLink = page.locator('a', { hasText: 'Docs' });
    const apiLink = page.locator('a', { hasText: 'API' });
    const communityLink = page.locator('a', { hasText: 'Community' });

    await expect(docsLink).toHaveAttribute('href', '/docs/intro');
    await expect(apiLink).toHaveAttribute('href', '/docs/api/class-playwright');
    await expect(communityLink).toHaveAttribute('href', '/community/welcome');
  });

  test('Verify sidebar navigation', async ({ page }) => {
    const installationLink = page.locator('a', { hasText: 'Installation' });
    const writingTestsLink = page.locator('a', { hasText: 'Writing tests' });

    await expect(installationLink).toHaveAttribute('href', '/docs/intro');
    await expect(writingTestsLink).toHaveAttribute('href', '/docs/writing-tests');
  });

  test('Verify breadcrumbs navigation', async ({ page }) => {
    const homeBreadcrumb = page.locator('a', { hasText: 'Home page' });
    const gettingStartedBreadcrumb = page.locator('text=Getting Started');
    const installationBreadcrumb = page.locator('text=Installation');

    await expect(homeBreadcrumb).toHaveAttribute('href', '/');
    await expect(gettingStartedBreadcrumb).toBeVisible();
    await expect(installationBreadcrumb).toBeVisible();
  });

  test('Verify code block copy button', async ({ page }) => {
    const copyButton = page.locator('button', { hasText: 'Copy code to clipboard' }).first();
    await expect(copyButton).toBeVisible();
    await copyButton.click();
  });

  test('Verify footer links', async ({ page }) => {
    const githubLink = page.locator('a', { hasText: 'GitHub' });
    const youtubeLink = page.locator('a', { hasText: 'YouTube' });

    await expect(githubLink).toHaveAttribute('href', 'https://github.com/microsoft/playwright');
    await expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/channel/UC46Zj8pDH5tDosqm1gd7WTg');
  });

});