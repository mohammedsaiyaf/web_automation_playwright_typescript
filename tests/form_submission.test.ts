import { test, expect } from "@playwright/test";
import { FormPage } from "../pages/formPage";

test("Form submission test", async ({ page }) => {
  const formPage = new FormPage(page); // Initialize the page object

  await formPage.navigate(); // Go to the form page
  await formPage.clickOnFormField();
  await formPage.enterNameField("Mohammed Sayyaf"); // Fill in the name
  await formPage.enterPassword("123456"); // Fill in the password

  await formPage.selectCheckbox(); // Select a checkbox
  await formPage.selectRadioButton(); // Select a radio button
  await formPage.selectAnOption("no"); // Choose an option from the dropdown

  await formPage.enterEmail("mohammed@saiyaf.com"); // Enter email address
  await formPage.enterMessage("I need to learn automation"); // Fill in the message

  // Handle the prompt dialog before submitting the form
  page.once("dialog", async (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    await dialog.dismiss(); // Dismiss the dialog
  });

  await formPage.clickSubmit(); // Submit the form
});
