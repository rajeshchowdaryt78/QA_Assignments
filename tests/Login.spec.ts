import {test, expect} from '@playwright/test';  
import { pages } from './pages';
import { TestData } from './TestData';
const testData = new TestData();

test('Login with valid credentials', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();
    await Pages.validLogin(testData.username, testData.password);
    let successMessage = await Pages.getSuccessMessage();
    expect(successMessage).toBe('Logged In Successfully');
    console.log('Positive test passed successfully.', successMessage);

    await Pages.LogoutButton.click();
    page.setDefaultTimeout(5000);


});

test('Login with invalid password', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();
    await Pages.invalidLogin(testData.username, testData.invalidPassword);
    let errorMessage = await Pages.getErrorMessage();
    await expect(errorMessage).toBe('Your password is invalid!');
    console.log('Negative test passed successfully.', errorMessage);

    page.setDefaultTimeout(5000);
});
test('Login with invalid username', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();
    await Pages.invalidLogin(testData.invalidUsername, testData.password);
    let errorMessage = await Pages.getErrorMessage();
    await expect(errorMessage).toBe('Your username is invalid!');
    console.log('Negative test passed successfully.', errorMessage);

    page.setDefaultTimeout(5000);
});
test('Login with empty credentials', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();     
    await Pages.invalidLogin('', '');
    let errorMessage = await Pages.getErrorMessage();
    await expect(errorMessage).toBe('Your username is invalid!');
    console.log('Negative test passed successfully.', errorMessage);

    page.setDefaultTimeout(5000);
});