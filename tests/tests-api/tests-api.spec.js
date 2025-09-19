import { test, expect } from '@playwright/test';
import { time } from 'console';

test.describe('Demo QA API Tests', () => {
    let baseUrl = 'https://demoqa.com';
    let username = `testuser_${Math.floor(Math.random() * 10000)}`;
    let password = 'Password123!';
    let userID;
    let token;
    let books = [];

    test('Create User', async ({ request }) => {
        const response = await request.post(`${baseUrl}/Account/v1/User`, {
            data: {
                userName: username,
                password: password
            }
        });

        expect(response.status()).toBe(201);
        
        const responseBody = await response.json();
        userID = responseBody.userID;
        
        expect(responseBody).toHaveProperty('userID');
        expect(responseBody.username).toBe(username);
    });

    test('Generate Token', async ({ request }) => {
        const response = await request.post(`${baseUrl}/Account/v1/GenerateToken`, {
            data: {
                userName: username,
                password: password
            }
        });

        expect(response.status()).toBe(200);
        
        const responseBody = await response.json();
        token = responseBody.token;
        
        expect(responseBody.status).toBe('Success');
        //expect(responseBody.result).toBe('User authorized successfully');
        expect(typeof responseBody.token).toBe('string');
    });

    test('Check Authorization', async ({ request }) => {
        const response = await request.post(`${baseUrl}/Account/v1/Authorized`, {
            data: {
                userName: username,
                password: password
            }
        });

        expect(response.status()).toBe(200);
        expect(await response.text()).toBe('true');
    });

});