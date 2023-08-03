describe('User Management', () => {
    describe('User', () => {
        beforeEach(() => {
            cy.clearCookies();
            cy.visit('http://52.25.24.192:3000/');
        });

         it('Should be able to login successfully with valid credentials', () => {
             // Given: user logs into Bramha home page
             cy.get('.pt-1')
                 .eq(0)
                 .click({force: true});

             // When: User logs in with  vlaid credentials
             cy.contains('Login').click();
             cy.get('[id="normal_login_username"]').type('loganieee07@gmail.com');
             cy.get('[id="normal_login_password"]').type('Test@123');
             cy.get('.register-btn').click();

             // Then: User Login should be successful 
            cy.contains("Welcome back, let's shop here", {timeout: 10000});
         });

        it('click the category and add to cart flow', () => {
            cy.contains('Categories').click({force: true});
            cy.contains('Chain').click({force: true});
            
        });

        it('invoke child tab',function(){
            cy.contains('Categories').click({force: true});
            cy.contains('Chain').click({force: true});
            cy.get('[id="btn-960c05d7-ea58-4b40-b79a-3023454938f6"]').invoke('removeAttr','target').click()
            cy.get('[id="btn-add-cart"]').click();
            cy.contains('Proceed').click();
            cy.get('[id="normal_login_username"]').type('loganieee07@gmail.com');
             cy.get('[id="normal_login_password"]').type('Test@123');
             cy.get('.register-btn').click();
        })

        it('invoke child tab',function(){
            cy.contains('Categories').click({force: true});
            cy.contains('Chain').click({force: true});
            cy.get('[id="btn-960c05d7-ea58-4b40-b79a-3023454938f6"]').invoke('removeAttr','target').click()
            cy.get('[id="btn-add-cart"]').click();
        })
        

    });
});