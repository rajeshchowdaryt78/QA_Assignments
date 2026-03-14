import {test, expect} from '@playwright/test';  
import { pages } from './pages';
import TestData from './TestData/Data.json';



test('Login with valid credentials', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();
    await Pages.validLogin(TestData.username, TestData.password);
    let successMessage = await Pages.getSuccessMessage();
    expect(successMessage).toBe('Logged In Successfully');
    console.log('Positive test passed successfully.');
    console.log('Success message:', successMessage);

    await Pages.LogoutButton.click();
    page.setDefaultTimeout(5000);


});

test('Login with invalid password', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();
    await Pages.invalidLogin(TestData.username, TestData.invalidPassword);
    let errorMessage = await Pages.getErrorMessage();
    expect(errorMessage).toBe('Your password is invalid!');
    console.log('Negative test passed successfully.');
    console.log('Error message:', errorMessage);

    page.setDefaultTimeout(5000);
});
test('Login with invalid username', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();
    await Pages.invalidLogin(TestData.invalidUsername, TestData.password);
    let errorMessage = await Pages.getErrorMessage();
    expect(errorMessage).toBe('Your username is invalid!');
    console.log('Negative test passed successfully.');
    console.log('Error message:', errorMessage);

    page.setDefaultTimeout(5000);
});
test('Login with empty credentials', async ({page}) => {
    const Pages = new pages(page);
    await Pages.goToLoginPage();     
    await Pages.invalidLogin(TestData.emptyUsername, TestData.emptyPassword);
    let errorMessage = await Pages.getErrorMessage();
    expect(errorMessage).toBe('Your username is invalid!');
    console.log('Negative test passed successfully.');
    console.log('Error message:', errorMessage);

    page.setDefaultTimeout(5000);
});