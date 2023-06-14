import {Page} from "@playwright/test";
import {userPhotoImg,newButton, userPhoto,Title ,userTitle,userValue, UserItems} from "./landing-page-locators";

export default class LandingPage {

    constructor(public page: Page) {

    }

    async waitForApiResponse() {
        await this.page.waitForResponse(response => {
            return response.url().includes('/api') && response.status() === 200;
        });
    }

    async verifyTitle() {
        return this.page.getByRole(Title.infoSectionRole).getByRole(Title.role, {name: Title.name})
    }

    async hoverOnEmail() {
        await this.page.hover(UserItems.email);
    }

    async hoverOnUserPhoto() {
        await this.page.hover(userPhoto);
    }

    async clickNewButton() {
        await this.page.click(newButton);
    }

    async takeImageUrl() {
        const imageElement = this.page.locator(userPhotoImg)
        return await imageElement?.getAttribute('src')
    }

    async getUserTitle() {
        const titleElement = this.page.locator(userTitle);
        return await titleElement?.innerText() || '';
    }

    async getUserValue() {
        const titleElement =  this.page.locator(userValue);
        return await titleElement?.innerText() || '';
    }

}