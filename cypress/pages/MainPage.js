class MainPage {
    elements = {
        closeWelcomeWindowButton: () => cy.get(".mfp-close"),
        signUpButton: () => cy.xpath("//a[@href='/user/registration']//span"),
        signInButton: () => cy.xpath("//div[@class='login']//div[@data-login-toggle]//span"),
        loginWithPhoneOrEmailButton: () => cy.xpath("//a[@href='/user/login']//span"),
        gameCategoriesButton: () => cy.xpath("//a[@data-link-games]//img"),
        tableGamesButton: () => cy.xpath("//a[@href='/gameGroup/table-games']").first(),
        profileName:() => cy.get(".user-info__profile-name"),
        goToProfileButton: () => cy.xpath("//span[contains(text(),'Go to profile')]"),
    };

    closeWelcomeWindow(){
        this.elements.closeWelcomeWindowButton().click();
    }

    clickSignUp(){
        this.elements.signUpButton().click();
    }

    clickSignIn(){
        this.elements.signInButton().click();
    }

    clickLoginWithPhoneOrEmail(){
        this.elements.loginWithPhoneOrEmailButton().click();
    }

    clickGameCategories(){
        this.elements.gameCategoriesButton().click();
    }

    clickTableGames(){
        this.elements.tableGamesButton().click();
    }

    clickGoToProfile(){
        this.elements.profileName().click();
        this.elements.goToProfileButton().click();
    }
}
export const mainPage = new MainPage();