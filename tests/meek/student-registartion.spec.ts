import {expect, test} from "@playwright/test";

test.describe.parallel('Registration feature', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/OnBoarding/Login')
        const joinNowButton = await page.isVisible('#join_now_button');
        expect(joinNowButton).toBeTruthy();
        await page.click('#join_now_button')
    })

    test('Student Register with valid data', async ({page}) => {
        const student = await page.isVisible('#student_option')
        expect(student).toBeTruthy();
        await page.click('#student_option')
    })
    test('Mentor Register with valid data', async ({page}) => {
        const student = await page.isVisible('#mentor_option')
        expect(student).toBeTruthy();
        await page.click('#mentor_option')
    })
    test('Investor Register with valid data', async ({page}) => {
        const student = await page.isVisible('#investor_option')
        expect(student).toBeTruthy();
        await page.click('#investor_option')
    })
    test('Entrepreneur Register with valid data', async ({page}) => {
        const student = await page.isVisible('#entreprenuer_option')
        expect(student).toBeTruthy();
        await page.click('#entreprenuer_option')
    })
})
