import { Page, Locator } from "@playwright/test"; // Import Playwright types

export class WaitPage {
  private readonly page: Page; // Holds the Playwright page instance

  private readonly delaysPage: Locator; // Locator for "JavaScript Delays" link
  private readonly startButton: Locator; // Locator for "Start" button
  private readonly liftOffText: Locator; // Locator for "Liftoff!" text

  constructor(page: Page) {
    this.page = page; // Assign the Playwright page instance

    this.delaysPage = page.getByRole("link", { name: "JavaScript Delays" }); // Get "JavaScript Delays" link
    this.startButton = page.getByRole("button", { name: "Start" }); // Get "Start" button
    this.liftOffText = page.getByText("Liftoff!", { exact: true }); // Get "Liftoff!" text exactly
  }

  async navigate() {
    await this.page.goto("https://practice-automation.com/"); // Navigate to main page
  }

  async jScriptDelays() {
    await this.delaysPage.click(); // Click on "JavaScript Delays" link
  }

  async start() {
    await this.startButton.click(); // Click the "Start" button
  }

  async liftOff() {
    await this.liftOffText.click(); // Click on the "Liftoff!" text
  }
}
