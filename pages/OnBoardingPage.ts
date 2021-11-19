import {expect, Page} from '@playwright/test';

export class OnBoardingPage {
    private page: Page

    constructor(page: Page) {
        this.page = page;
    }

    async goto(url: string) {
        await this.page.goto(url);
    }

    async clickJoinNow(){
        const joinNowButton = await this.page.isVisible('#join_now_button');
        expect(joinNowButton).toBeTruthy();
        await this.page.click('#join_now_button')
    }

}
