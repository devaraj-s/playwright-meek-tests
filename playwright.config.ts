import {PlaywrightTestConfig} from '@playwright/test';

const config: PlaywrightTestConfig = {
    reporter: 'experimental-allure-playwright',
    use: {
        baseURL: 'https://meek-staging.web.app',
        headless: false,
        viewport: {width: 1280, height: 720},
        ignoreHTTPSErrors: true,
        video: 'on', // off, on, retain-on-failure, on-first-retry,
        screenshot: 'only-on-failure' //off, on, only-on-failure
    },
};
export default config;
