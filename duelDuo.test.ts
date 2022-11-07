
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id = “choices”', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(1000)
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

test('“Add to Duo” button displays the div with id = “player-duo”', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    await driver.sleep(1000)
    const addToDuo = await driver.findElement(By.className("bot-btn"))
    addToDuo.click()
    console.log(addToDuo)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed = await playerDuo.isDisplayed()
    await driver.sleep(1000)
   expect(displayed).toBe(true)
})