import { test as baseTest } from "@playwright/test";
import LandingPage from "../page-objects/landing-page/landing-page";

type pages = {
    landingPage: LandingPage;

}

const testPages = baseTest.extend<pages>({

    landingPage: async ({page}, use) => {
        await use(new LandingPage(page))
    }
})

export const  test = testPages
