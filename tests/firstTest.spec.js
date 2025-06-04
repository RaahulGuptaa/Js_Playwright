import { test,expect } from "@playwright/test";

test("My first test", async function({page}){
    expect(12).toEqual(12)
    expect("Rahul Gupta").toContain("Rahul")
    expect(2.0).toBe(2.0)
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
})