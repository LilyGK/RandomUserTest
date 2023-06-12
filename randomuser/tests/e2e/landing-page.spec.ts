import LandingPage from "../../page-objects/landing-page/landing-page";
import { test } from "../../fixtures/base-test";
import { expect } from "@playwright/test";

test.describe("Landing page from Random user tests", async ()=>{

    test("Title  in landing page exists and is correct", async ({ page, landingPage }) =>{
        await page.goto("./")
        const title = await landingPage.verifyTitle()
        await expect(title).toBeVisible()


    })

    test("All info user elements are retrieving data ", async ({page, landingPage}) => {
        await page.goto("./")
        await landingPage.hoverOnEmail();
        await page.waitForTimeout(5000)
        //const title = await landingPage.getTitle();
        //expect(title).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/); // regex to validate email format
        });


    test("Generate a new user clicking in new button ", async ({page, landingPage}) => {

    })







})