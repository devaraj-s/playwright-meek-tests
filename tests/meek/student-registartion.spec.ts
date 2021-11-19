import {expect, test} from "@playwright/test";
import {OnBoardingPage} from "../../pages/OnBoardingPage"
import {JoinNowPage} from "../../pages/JoinNowPage"


let onBoardingPage = null
let joinNowPage = null

test.describe.parallel('Registration feature', () => {
    test.beforeEach(async ({page}) => {
        onBoardingPage = new OnBoardingPage(page)
        joinNowPage = new JoinNowPage(page)
        await onBoardingPage.goto('/OnBoarding/Login');
        await onBoardingPage.clickJoinNow();
    })

    test('Student Register with valid data', async ({page}) => {
        await joinNowPage.typeOfJoinNow('#student_option')
    })
    test('Mentor Register with valid data', async ({page}) => {
        await joinNowPage.typeOfJoinNow('#mentor_option')
    })
    test('Investor Register with valid data', async ({page}) => {
        await joinNowPage.typeOfJoinNow('#investor_option')
    })
    test('Entrepreneur Register with valid data', async ({page}) => {
        await joinNowPage.typeOfJoinNow('#entreprenuer_option')
    })
})
