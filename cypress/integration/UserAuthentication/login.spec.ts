/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('When an unauthenticated user connects to the app', () => {
  const LOGIN_SCREEN_CONTAINER_TEST_ID = 'login-screen-container';
  const ERROR_MESSAGE_TEST_ID = 'base-alert-message';

  it('successfully loads', () => {
    cy.visit('/');
  });

  it('displays a "Sign in to Nimble" message', () => {
    cy.visit('/');

    expect(cy.findByTestId(LOGIN_SCREEN_CONTAINER_TEST_ID).contains('Sign in to Nimble'));
  });

  it('displays an email error message when the email format is invalid', () => {
    cy.visit('/');

    cy.findByLabelText('Email').type('no_a_valid@email');
    cy.findByLabelText('Password').click();

    expect(cy.findByTestId(ERROR_MESSAGE_TEST_ID).contains('email'));
  });

  it('displays an email error message when the email is left unfilled', () => {
    cy.visit('/');

    cy.findByLabelText('Email').click();
    cy.findByLabelText('Password').click();

    expect(cy.findByTestId(ERROR_MESSAGE_TEST_ID).contains('email'));
  });

  it('displays no email error message when the email format is valid', () => {
    cy.visit('/');

    cy.findByLabelText('Email').type('a_valid@email.com');
    cy.findByLabelText('Password').click();

    expect(cy.findByTestId(ERROR_MESSAGE_TEST_ID).should('not.exist'));
  });

  it('displays a password error message when the password format is too short', () => {
    cy.visit('/');

    cy.findByLabelText('Password').type('short');
    cy.findByLabelText('Email').click();

    expect(cy.findByTestId(ERROR_MESSAGE_TEST_ID).contains('password'));
  });

  it('displays a password error message when the password format is too long', () => {
    cy.visit('/');

    cy.findByLabelText('Password').type('1234567890123456789012345667890123');
    cy.findByLabelText('Email').click();

    expect(cy.findByTestId(ERROR_MESSAGE_TEST_ID).contains('password'));
  });

  it('displays no email/password error message when both fields format are valids', () => {
    cy.visit('/');

    cy.findByLabelText('Email').type('a_valid@email.com');
    cy.findByLabelText('Password').type('password123');

    expect(cy.findByTestId(ERROR_MESSAGE_TEST_ID).should('not.exist'));
  });
});
