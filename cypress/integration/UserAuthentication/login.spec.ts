/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('When an unauthenticated user connects to the app', () => {
  const LOGIN_SCREEN_CONTAINER_TEST_ID = 'login-screen-container';

  it('Successfully loads', () => {
    cy.visit('/');
  });

  it('Displays a "Sign in to Nimble" message', () => {
    cy.visit('/');

    expect(cy.findByTestId(LOGIN_SCREEN_CONTAINER_TEST_ID).contains('Sign in to Nimble'));
  });
});
