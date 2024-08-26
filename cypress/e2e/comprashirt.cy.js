describe('Comprar Shirt', () => {
  it('Deve realizar uma compra com sucesso', () => {
      // Acessa a página inicial
      cy.visit('https://magento.softwaretestingboard.com/');

      // Aguarda até que a página carregue completamente
      cy.wait(2000);

      // Seleciona campo busca
      cy.get('[id="search"]').click();

      // Procurar por shirt
      cy.get('[id="search"]').type('shirt{enter}');
      
      // Escolher ultima opção de shirt
      cy.get('*[class^="item"]').contains('shirts+for+w').click();

       // Selecionar produto
      cy.xpath('//*[@id="maincontent"]/div[3]/div[1]/div[2]/div[2]/ol/li[1]').click();

      // Selecionar tamanho
      cy.get('[id="option-label-size-143-item-166"]').click();
       
      // Selecionar cor 
      cy.get('[id="option-label-color-93-item-50"]').click();

      // ADD carrinho de compras
      cy.get('[id="product-addtocart-button"]').click();
      cy.wait(3000);

      // Verifica se o item aparece no resumo do carrinho
    cy.get('.minicart-wrapper').click(); // Abre o mini carrinho
    cy.get('.product-item-name').should('contain', 'Jupiter All-Weather Trainer');

    // Realizar checkout
    cy.get('[id="top-cart-btn-checkout"]').click();
    
  
  });
});
