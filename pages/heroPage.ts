import { Page, Locator } from "@playwright/test";

// Page Object Model for the Hero login page
export class HeroPage {
  private readonly page: Page;

  // Locators for the username, password fields, login button, and logout link
  private readonly userName: Locator;
  private readonly passWord: Locator;
  private readonly loginacc: Locator;
  private readonly logOut: Locator;

  constructor(page: Page) {
    this.page = page;

    // Locate the username textbox by its role and name
    this.userName = page.getByRole("textbox", { name: "Username" });

    // Locate the password textbox by its role and name
    this.passWord = page.getByRole("textbox", { name: "Password" });

    // Locate the login button by its role and name
    this.loginacc = page.getByRole("button", { name: " Login" });

    // Locate the logout link by its role and name
    this.logOut = page.getByRole("link", { name: "Logout" });
  }

  // Navigate to the login page URL
  async navigateURL() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  // Fill in the username field
  async UserName(username: string) {
    await this.userName.fill(username);
  }

  // Fill in the password field
  async password(password: string) {
    await this.passWord.fill(password);
  }

  // Click the login button
  async login() {
    await this.loginacc.click();
  }

  // Click the logout link
  async Logout() {
    await this.logOut.click();
  }
}
