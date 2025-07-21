import { Page, Locator } from "@playwright/test";

export class FormPage {
  private readonly page: Page;

  // Locators for form elements
  private readonly formField: Locator;
  private readonly nameField: Locator; // Name input field
  private readonly passwordInput: Locator; // Password input field
  private readonly submitButton: Locator; // Submit button
  private readonly checkbox: Locator; // Checkbox (e.g., drink2)
  private readonly radioButton: Locator; // Radio button (e.g., color1)
  private readonly selectOption: Locator; // Dropdown select (e.g., automation)
  private readonly emailInput: Locator; // Email input field
  private readonly messageInput: Locator; // Message text area

  constructor(page: Page) {
    this.page = page;

    this.formField = page.getByText("Form Fields");
    this.nameField = page.getByTestId("name-input");
    this.passwordInput = page.getByLabel("Password");
    this.submitButton = page.getByTestId("submit-btn");

    this.checkbox = page.getByTestId("drink2");
    this.radioButton = page.getByTestId("color1");
    this.selectOption = page.getByTestId("automation");
    this.emailInput = page.getByTestId("email");
    this.messageInput = page.getByTestId("message");
  }

  async navigate() {
    await this.page.goto("https://practice-automation.com/"); // Navigate to form page
  }

  async clickOnFormField() {
    await this.formField.click();
  }
  async enterNameField(name: string) {
    await this.nameField.fill(name); // Fill name field
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password); // Fill password field
  }

  async clickSubmit() {
    await this.submitButton.click(); // Click submit button
  }

  async selectCheckbox() {
    await this.checkbox.check(); // Check the checkbox
  }

  async selectRadioButton() {
    await this.radioButton.check(); // Select the radio button
  }

  async selectAnOption(value: string) {
    await this.selectOption.selectOption(value); // Select dropdown option
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email); // Fill email field
  }

  async enterMessage(message: string) {
    await this.messageInput.fill(message); // Fill message text area
  }
}
