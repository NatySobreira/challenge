import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Acessando o site e clicando no forms', async ({ page }) => {
  await page.goto('https://demoqa.com/');

// expect a title "to contain" a URL
  await expect(page).toHaveURL('https://demoqa.com/'); //not make assertions with banner or image because, man change in future

// scroll down in page and click on the forms pay attention, please sometimes add to wait more than 3000ms 
 const FormElement = page.getByRole('heading', { name: 'Forms' });
    await FormElement.click();
    test.setTimeout(150_000);
});
