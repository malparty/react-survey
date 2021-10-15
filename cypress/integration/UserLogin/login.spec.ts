describe('When an unauthenticated user connects to the app', () => {
  it('Successfully loads', () => {
    cy.visit('/');
  });

  it('Displays a sign in to Nimble message', () => {
    cy.visit('/');
    expect(cy.contains('Sign in to Nimblesss'));
  });
});
