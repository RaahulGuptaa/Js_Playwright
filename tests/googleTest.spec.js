import{test,expect} from "@playwright/test"

test("Google Test", async function({page}){
    await page.goto("https://www.google.com")
    const url = await page.url()
    console.log("URL---> ",url)
    const title = await page.title()
    console.log("Title---> ",title)
    await expect(title).toBe("Google")
    await expect(title).toStrictEqual("Google")
})