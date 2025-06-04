

import{test,expect} from "@playwright/test"

test("Orange HRM Login and LogOut Test", async function({page}){
    // Launch Site
    await page.goto("https://opensource-demo.orangehrmlive.com/")
    // Enter Credentials
    await page.locator('input[name="username"]').type("Admin")
    await page.locator('input[name="password"]').type("admin1234")
    // Click Submit Button
    await page.locator('//button[@type="submit"]').click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()




    // // Verify Dashboard in URL
    // await expect(page).toHaveURL(/dashboard/)
    // // Verify Dashboard Web element is visible
    // await expect(page.locator("//h6[text()='Dashboard']")).toBeVisible()
    // // Verify Brand banner is visible
    // await expect(page.getByAltText("client brand banner")).toBeVisible()
    // // Click Profile Dropdown
    // await page.getByAltText("profile picture").click()
    // // Click Logout Button
    // await page.locator('//a[text()="Logout"]').click()
    // // Verify login in URL
    // await expect(page).toHaveURL(/login/)
})