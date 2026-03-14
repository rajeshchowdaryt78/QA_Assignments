import{Page, expect, test} from '@playwright/test';

export class TestData {

    readonly username: string;
    readonly password: string;
    readonly invalidUsername: string;
    readonly invalidPassword: string;   
    readonly emptyUsername: string;
    readonly emptyPassword: string;
    readonly loginUrl: string;    


    constructor() {
        this.username = 'student';
        this.password = 'Password123';
        this.invalidUsername = 'invalidUser';
        this.invalidPassword = 'InvalidPassword';
        this.emptyUsername = '';
        this.emptyPassword = '';
        this.loginUrl = 'https://practicetestautomation.com/practice-test-login/';   
        }
    }