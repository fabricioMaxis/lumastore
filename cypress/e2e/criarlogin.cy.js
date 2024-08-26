describe('Login/Cadastro', () => {
  it('Deve criar login com sucesso', () => {
      // Acessa a página inicial
      cy.visit('https://magento.softwaretestingboard.com/');

      // Aguarda até que a página carregue completamente
      cy.wait(2000);

      // Seleciona campo busca
      cy.get('[id="search"]').click();

      // Clica na opção de de create an account
      cy.xpath('/html/body/div[2]/header/div[1]/div/ul/li[3]/a').click();

      // Preenche as informações de Login
      cy.get('[id="firstname"]').type('Fabricio');
      cy.get('[id="lastname"]').type('Pereira');
      cy.get('[id="email_address"]').type('falus09+2@gmail.com');
      cy.get('[id="password"]').type('Ubusm@M09');
      cy.get('[id="password-confirmation"]').type('Ubusm@M09');

      //Clicar no botão Create an account
      cy.get('*[class^="action submit primary"]').click();

      //Verificar mensagem de criação com sucesso do login
      cy.xpath('//*[@id="maincontent"]/div[1]/div[2]/div/div/div').contains('hank you for registering with Main Website Store.');

      
    });
  });      