import {Page} from "@playwright/test";
//import * as locators from "./landing-page-locators";
import { Title ,userTitle,userValue, UserItems} from "./landing-page-locators";

export default class LandingPage {


    constructor(public page: Page) {

    }



    async verifyTitle() {
        return this.page.getByRole(Title.infoSectionRole).getByRole(Title.role,
            {name: Title.name})
    }

    async hoverOnItem(item: string) {
        const element = this.page.locator(UserItems[item]);
        await element.hover();
    }

    async hoverOnEmail() {
        await this.page.hover(UserItems.email);
    }

    async getUserTitle() {
        const titleElement = await this.page.locator(userTitle); // replace '#title' with the actual id of the title element
        return await titleElement?.innerText() || '';
    }

    async getUserValue() {
        const titleElement = await this.page.locator(userValue); // replace '#title' with the actual id of the title element
        return await titleElement?.innerText() || '';
    }






}