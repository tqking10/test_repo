import { forgotPasswordPage } from "../locators/forgotPassword";
import { thankyouPage } from "../locators/thankyou";

describe('Test Forgot Password On Web', () => {
  it('Error message displays when inputting an invalid email address', () => {
    cy.visit(forgotPasswordPage.FORGOT_PASSWORD_URL);
    cy.get(forgotPasswordPage.EMAIL_ID).type(forgotPasswordPage.INVALID_EMAIL);
    cy.get(forgotPasswordPage.SEND_BTN_ID).click();
    cy.get(forgotPasswordPage.EMAIL_ERROR_MSG_ID)
      .should("be.visible")
      .should("have.text", forgotPasswordPage.EMAIL_ERROR_MSG);
  });

  it('Changing password successfully', () => {
    cy.visit(forgotPasswordPage.FORGOT_PASSWORD_URL);
    cy.get(forgotPasswordPage.EMAIL_ID).type(forgotPasswordPage.VALID_EMAIL);
    cy.get(forgotPasswordPage.SEND_BTN_ID).click();
    cy.get(thankyouPage.SUCCESS_MSG_ID)
      .should("be.visible")
      .should("have.text", thankyouPage.SUCCESS_MSG);
  })
})