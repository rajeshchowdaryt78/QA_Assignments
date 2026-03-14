import { Page, Locator } from "@playwright/test";
import TestData from './TestData/Data.json';
const loginUrl = TestData.loginUrl;



export class pages {


    readonly page: Page;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;  
    readonly LogoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Username = page.locator('#username');
        this.Password = page.locator('#password');
        this.LoginButton = page.locator('#submit');
        this.LogoutButton = page.getByRole('link', { name: 'Log out' });
    }

    async goToLoginPage() {
        await this.page.goto(loginUrl);
    }   

    async validLogin(username: string, password: string) {
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.LoginButton.click();
    

    }   
    async getSuccessMessage() {
        let successMessage = await this.page.locator('.post-title').textContent();
        return successMessage;
    }    
    async invalidLogin(username: string, password: string) {
        await this.Username.fill(username);
        await this.Password.fill(password);
        await this.LoginButton.click();
    }

    async getErrorMessage() {
    let errorMessage = await this.page.locator('#error').textContent();
    return errorMessage;
    }

    async logout() {
        await this.LogoutButton.click();
    }   
}

