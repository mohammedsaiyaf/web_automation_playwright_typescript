import { test, expect } from "@playwright/test";
import { WaitPage } from "../pages/waitPage";

test("test web waits", async ({ page }) => {
  const waitPage = new WaitPage(page); // Initialize the WaitPage object

  await waitPage.navigate(); // Navigate to the main practice automation page
  await waitPage.jScriptDelays(); // Click the "JavaScript Delays" link
  await waitPage.start(); // Click the "Start" button to trigger delay

  await page.waitForTimeout(10000); // Wait for 10 seconds (not awaited — no pause happens here!)

  await waitPage.liftOff(); // Click the "Liftoff!" message
  console.log("Wait implemented successfully!"); // Log success message
});
