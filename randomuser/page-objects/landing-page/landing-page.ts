import {Page} from "@playwright/test";
//import * as locators from "./landing-page-locators";
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
        return this.page.getByRole(Title.infoSectionRole).getByRole(Title.role,
            {name: Title.name})
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
        const titleElement = this.page.locator(userTitle); // replace '#title' with the actual id of the title element
        return await titleElement?.innerText() || '';
    }

    async getUserValue() {
        const titleElement = await this.page.locator(userValue); // replace '#title' with the actual id of the title element
        return await titleElement?.innerText() || '';
    }

    async waitForTitleChange(page: Page, initialTitle: string): Promise<void> {
        await page.waitForFunction(
            (initialTitle) => {
                const titleElement = document.querySelector('[id="user_title"]');
                return titleElement && titleElement.textContent !== initialTitle;
            },
            initialTitle
        );

    }








}