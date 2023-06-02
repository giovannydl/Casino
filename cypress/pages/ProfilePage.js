class ProfilePage {
    elements = {
        featuredGamesButton: () => cy.xpath("//span[contains(text(),'Featured games')]"),
    };

    verifyIsAtPage(){
        cy.url().should('include', 'cabinet/profile/index');
    }

    clickFeaturedGames(){
        this.elements.featuredGamesButton().click();
    }
}
export const profilePage = new ProfilePage();