/// <reference types="cypress" />

describe('When an unauthenticated user connects to the app', () => {
  const LOGIN_SCREEN_CONTAINER_SELECTOR = '[data-test-id=login-screen-container]';

  it('Successfully loads', () => {
    cy.visit('/');
  });

  it('Displays a "Sign in to Nimble" message', () => {
    cy.visit('/');

    expect(cy.get(LOGIN_SCREEN_CONTAINER_SELECTOR).contains('Sign in to Nimble'));
  });
});
