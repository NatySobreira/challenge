import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Acessando o site e clicando no submenu', async ({ page }) => {
  await page.goto('https://demoqa.com/forms');
  
// use the selector to 'Practice Form'
  await page.locator('li:has-text("Practice Form")').click();

    await expect(page).toHaveURL('https://demoqa.com/automation-practice-form');
    test.setTimeout(150_000);
});

/* assertions of page 
when running the command line via browser, it was very slow to render the elements 
on the screen, this would break the test, for now I left it like this
await expect(page.locator('#firstName')).toBeVisible({ timeout: 55.000});
});*/