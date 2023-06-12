import LandingPage from "../../page-objects/landing-page/landing-page";
import { test } from "../../fixtures/base-test";
import { expect } from "@playwright/test";

test.describe("Landing page from Random user tests", async ()=>{

    test.beforeEach(async ({ page }) => {
        await page.goto("./")
    });

    test("Validate the landing page tittle", async ({ page, landingPage }) =>{
        const title = await landingPage.verifyTitle()
        await expect(title).toBeVisible()

    })

    test("User info changes when hover on other item ", async ({page, landingPage}) => {
        const initialUserTitle = await landingPage.getUserTitle()
        const initialUserValue = await landingPage.getUserValue()
        //await page.waitForTimeout(1000)
        await landingPage.hoverOnEmail()
        const actualUserTitle = await landingPage.getUserTitle()
        const actualUserValue = await landingPage.getUserValue()
        await expect(initialUserTitle).not.toBe(actualUserTitle);
        await expect(initialUserValue).not.toBe(actualUserValue);
        await expect(actualUserTitle).toBe('My email address is')
        await expect(actualUserValue).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // regex to validate email format
        });


    test("Generate a new user clicking in new button @e2e", async ({page, landingPage}) => {
        //await page.waitForTimeout(2000)
        await landingPage.waitForApiResponse()
        const initialSrcImage = await landingPage.takeImageUrl()
        await landingPage.hoverOnUserPhoto()
        await landingPage.clickNewButton()
        //await page.waitForTimeout(2000)
        await landingPage.waitForApiResponse()
        const newSrcImage = await landingPage.takeImageUrl()
        console.log( "funciono" + initialSrcImage)
        console.log("funciono2" + newSrcImage)
        await expect(initialSrcImage).not.toBe(newSrcImage)

    })







})