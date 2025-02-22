describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
      cy.fixture('user').then((user) => {

          cy.visit(user.url_profile);

          cy.get('#email_input').type(user.email);

          cy.get('#password_input').type(user.password);
      
          cy.get('#check_login').check();
      
          cy.get('button[type="submit"]').click();
      
          cy.url().should('include', user.url_base); 
      });
  });
});