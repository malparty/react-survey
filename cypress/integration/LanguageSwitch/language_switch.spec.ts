/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />

describe('When a user switch the current language from English to French', () => {
  it('replaces French by Français', () => {
    cy.visit('/');

    const frenchLink = cy.findByText('French').click();

    expect(frenchLink.contains('Français'));
  });
});

describe('When a user switch back to English after switching to French', () => {
  it('replaces Anglais back to English', () => {
    cy.visit('/');

    cy.findByText('French').click();
    const englishLink = cy.findByText('Anglais').click();

    expect(englishLink.contains('English'));
  });
});
