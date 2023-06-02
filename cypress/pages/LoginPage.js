class LoginPage {
    elements = {
        emailOrPhoneInput: () => cy.get("#UserLogin_username"),
        passwordInput: () => cy.get("#UserLogin_password"),
        signInButton: () => cy.xpath("//button[@type='submit']//span"),
    }

    verifyIsAtPage(){
        cy.url().should('include', 'user/login');
    }

    typeEmailOrPhone(emailOrPhone){
        this.elements.emailOrPhoneInput().type(emailOrPhone);
    }

    typePassword(password){
        this.elements.passwordInput().type(password);
    }

    clickSignIn(){
        this.elements.signInButton().click();
    }
}
export const loginPage = new LoginPage();