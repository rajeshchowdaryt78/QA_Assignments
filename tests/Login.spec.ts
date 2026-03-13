import {test, expect} from '@playwright/test';  
import { pages } from './pages';
test('Login with valid credentials', async ({page}) => {
    const userData = new pages(page);
    await userData.goToLoginPage();
    await userData.validLogin('student', 'Password123');
    let successMessage = await userData.getSuccessMessage();
    expect(successMessage).toBe('Logged In Successfully');
    console.log('Test passed successfully.', successMessage);

    await userData.LogoutButton.click();
    page.setDefaultTimeout(5000);


});
