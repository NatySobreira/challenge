import { test, expect } from '@playwright/test';
import { time } from 'console';

test('Preenchendo o forms', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
 
// assertions of page 
  await expect(page.locator('#firstName')).toBeVisible();  

   await page.waitForSelector('#firstName');
  await page.waitForSelector('#lastName');
  await page.waitForSelector('#userEmail');
  await page.waitForSelector('#userNumber');

  // assertions of page elements
  await expect(page.locator('#firstName')).toBeVisible();  
  await expect(page.locator('#lastName')).toBeVisible();
  await expect(page.locator('#userEmail')).toBeVisible();
  await expect(page.locator('#userNumber')).toBeVisible();

  // fill inputs
  await page.locator('#firstName').fill('Natalia');
  await page.locator('#lastName').fill('Sobreira');
  await page.locator('#userEmail').fill('seu.email@example.com');   
  await page.locator('#userNumber').fill('1234567890'); // Mobile Number

  // radio button generer
  await page.locator('label[for="gender-radio-2"]').click();
  await expect(page.locator('#gender-radio-2')).toBeChecked();


  await page.locator('#dateOfBirthInput').click();
  await page.locator('.react-datepicker__month-select').selectOption({ label: 'August' });
  await page.locator('.react-datepicker__year-select').selectOption({ label: '1990' });
  await page.locator('.react-datepicker__day--017').click(); 

  // fill (examples: Maths, Physics)
  await page.locator('#subjectsInput').fill('Maths');
  await page.keyboard.press('Enter');
  await page.locator('#subjectsInput').fill('Physics');
  await page.keyboard.press('Enter');

  /* clicking labels the checkboxes
  //await page.locator('label[for="hobbies-checkbox-1"]').click(); // Sports
  await expect(page.locator('#hobbies-checkbox-1')).toBeChecked();
  await page.locator('label[for="hobbies-checkbox-2"]').click(); // Reading
  await expect(page.locator('#hobbies-checkbox-2')).toBeChecked(); 

  // upload image
  await page.locator('#uploadPicture').setInputFiles('\Desktop\challenge\tests\image/Curriculo-NataliaSobreira-en-us-09-25.pdf'); 

  // fill the Current Address
  await page.locator('#currentAddress').fill('Rua Exemplo, 123, Bairro Teste, Cidade Fictícia');

  // selecting State e City
  await page.locator('#state').click();
  await page.getByText('NCR').click(); // Exemplo: Seleciona NCR
  await page.locator('#city').click();
  await page.getByText('Delhi').click(); // Exemplo: Seleciona Delhi


  await page.locator('#submit').click();

  // assertions of conclusion
  await expect(page.locator('.modal-title')).toHaveText('Thanks for submitting the form');
  await page.getByRole('button', { name: 'Close' }).click(); */
});
        
    




/*

let form = await page.locator("//h5[contains(text(), ,'Forms')]");
await form.scrollIntoViewIfNeeded();
await form.click();
expect( page.locator('h5').textContent()).toEqual('Forms');

Escolher a opção Forms na página inicial

Clicar no submenu Practice Form

Preencher todo o formulário com valores
aleatórios

O Arquivo utilizado para upload, precisa ser um
.txt qualquer, e precisa estar na devida pasta do
github ao ser publicado o projeto

Submter o formulário

Garantir que um popup foi aberto após o submit

Fechar o popup */
