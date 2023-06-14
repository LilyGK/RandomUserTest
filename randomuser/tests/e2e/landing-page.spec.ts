import { test } from "../../fixtures/base-test";
import { expect } from "@playwright/test";

test.describe("Landing page from Random user tests", async ()=>{

    test.beforeEach(async ({ page, landingPage }) => {
        await page.goto("./")
        await landingPage.waitForApiResponse()
    });

    test("Validate the landing page tittle @e2e ", async ({ landingPage }) =>{
        const title = await landingPage.verifyTitle()
        await expect(title).toBeVisible()
    })

    test("User info changes when hover on other item @e2e  ", async ({landingPage}) => {
        await landingPage.hoverOnEmail()
        const actualUserTitle = await landingPage.getUserTitle()
        const actualUserValue = await landingPage.getUserValue()
        await expect(actualUserTitle).toBe('My email address is')
        await expect(actualUserValue).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // regex to validate email format
    });

    test("Generate a new user clicking in new button @e2e ", async ({ landingPage}) => {
        const initialSrcImage = await landingPage.takeImageUrl()
        await landingPage.hoverOnUserPhoto()
        await landingPage.clickNewButton()
        await landingPage.waitForApiResponse()
        const newSrcImage = await landingPage.takeImageUrl()
        await expect(initialSrcImage).not.toBe(newSrcImage)
    })
})