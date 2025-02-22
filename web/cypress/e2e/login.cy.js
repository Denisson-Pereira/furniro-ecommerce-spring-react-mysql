describe('Teste de Login', () => {
  it('Deve fazer login com sucesso', () => {
      // Carregar os dados do fixture
      cy.fixture('user').then((user) => {
          // Visita a página de login
          cy.visit(user.url_profile);
      
          // Preenche o campo de login
          cy.get('#email_input').type(user.email);
      
          // Preenche o campo de senha
          cy.get('#password_input').type(user.password);
      
          // Marca o checkbox "Remember me"
          cy.get('#check_login').check();
      
          // Clica no botão de login
          cy.get('button[type="submit"]').click();
      
          // Verifica se a página de destino após o login foi carregada
          cy.url().should('include', user.url_base); 
      });
  });
});