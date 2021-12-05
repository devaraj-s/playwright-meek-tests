import {expect, Locator, Page} from "@playwright/test";

type StudentPayload = {
    firstName: string;
    lastName: string;
    email: string;
    student_id?: string;
    university_name: string;
    password: string;
    confirmPassword: string;
}

export class StudentRegistrationPage {
    readonly firstName: Locator
    readonly lastName: Locator
    readonly email: Locator
    readonly student_id?: Locator
    readonly university_name: Locator
    readonly password: Locator
    readonly confirmPassword: Locator
    readonly terms_and_conditions: Locator
    readonly join_now_button: Locator
    private page: Page

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('#first_name')
        this.lastName = page.locator('#last_name')
        this.email = page.locator('#email_address')
        this.student_id = page.locator('#studentID')
        this.university_name = page.locator('#university_name_dropdown')
        this.password = page.locator('#create_password')
        this.confirmPassword = page.locator('#confirm_password')
        this.terms_and_conditions = page.locator('#checkbox_agree_privacy_policy')
        this.join_now_button = page.locator('#student_join_now_button')
    }

    async registerStudent(studentDetails: StudentPayload) {
        const firstName_input = await this.firstName.isVisible()
        expect(firstName_input).toBeTruthy();
        await this.firstName.type(studentDetails.firstName)
        await this.lastName.type(studentDetails.lastName)
        await this.student_id.type(studentDetails.student_id)
    }
}
