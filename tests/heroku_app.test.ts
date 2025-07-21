import { test, expect } from "@playwright/test";
import { HeroPage } from "../pages/heroPage";

test("test", async ({ page }) => {
  const heroPage = new HeroPage(page); // Initialize the HeroPage object with the current page instance

  await heroPage.navigateURL(); // Navigate to the target URL
  await heroPage.UserName("tomsmith"); // Enter the username
  await heroPage.password("SuperSecretPassword!"); // Enter the password
  await heroPage.login(); // Click the login button
  await heroPage.Logout(); // Click the logout button
});
