class UserRegistrationPage {
    elements = { 
        emailInput: () => cy.get("[data-test='input-email']"),
        acceptTermsCheckbox: () => cy.get(".input__wrapper > label"),
        expandCurrencyDropdown: () => cy.get('.input__wrapper > .selectric-wrapper > .selectric > .selectric__button'),
        currencySelect: () => cy.xpath("//label[contains(text(),'Currency')]//..//div[@class='selectric-scroll']//ul"),
        passwordInput: () => cy.get("[data-test='input-password']"),
        reenterPasswordInput: () => cy.get("[data-test='input-password_confirmation']"),
        createAccountButton: () => cy.xpath("//button[@data-test='control-submit']"),
    };

    verifyIsAtPage(){
        cy.url().should('include', 'user/registration');
    }

    typeEmail(emailAddress){
        this.elements.emailInput().type(emailAddress);
    }

    clickAcceptTerms(){
        this.elements.acceptTermsCheckbox().click();
    }

    selectCurrency(currency){
        this.elements.expandCurrencyDropdown().click();
        this.elements.currencySelect().contains(currency).click();
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    reenterPassword(password){
        this.elements.reenterPasswordInput().type(password);
    }

    clickCreateAccount(){
        this.elements.createAccountButton().click();
    }
}
export const userRegistrationPage =  new UserRegistrationPage();