describe('Google Testi', () => {
    it('Sayfanın başlığını doğrula', () => {
      cy.visit('https://www.google.com');
      cy.title().should('eq', 'Google');
      //Cookies i kabul et.
      cy.get('#W0wltc > .QS5gu').click();

       // Arama kutusuna "kar" yaz ve ara
       cy.get('#APjFqb').type('ski{enter}');
       // Sonuçların yüklendiğini doğrula
    cy.url().should('include', 'search?q=ski');
    cy.get('#search').should('be.visible'); // Arama sonuçlarının yüklendiğini kontrol et

    });
  });
  