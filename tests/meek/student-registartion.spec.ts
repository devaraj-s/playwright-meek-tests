import {test} from "@playwright/test";
import {OnBoardingPage} from "../../pages/OnBoardingPage"
import {JoinNowPage} from "../../pages/JoinNowPage"
import {StudentRegistrationPage} from "../../pages/StudentRegistrationPage"
import * as faker from 'faker';

let onBoardingPage = null
let joinNowPage = null
let student_registration_page = null

test.describe.parallel('Registration feature', () => {

    let studentDetails = {
        firstName: faker.name.firstName(),
        lastName:  faker.name.lastName(),
        email: faker.internet.email(),
        student_id: faker.finance.creditCardNumber(),
        password:"test123"
    }

    test.beforeEach(async ({page}) => {
        onBoardingPage = new OnBoardingPage(page)
        joinNowPage = new JoinNowPage(page)
        student_registration_page = new StudentRegistrationPage(page)
        await onBoardingPage.goto('https://meek-staging.web.app/OnBoarding/Login');
        await onBoardingPage.clickJoinNow();
    })

    test.only('Student Register with valid data', async ({page}) => {
        await joinNowPage.typeOfJoinNow('#student_option')
        await student_registration_page.registerStudent(studentDetails)
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
