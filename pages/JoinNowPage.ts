import {expect, Page} from '@playwright/test';

export class JoinNowPage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async typeOfJoinNow(userType: string) {
        const student = await this.page.isVisible(userType)
        expect(student).toBeTruthy();
        await this.page.click(userType)
    }
}
