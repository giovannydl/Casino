class RegistrationSuccessPage {
    elements = {
        congratulationsLabel: () => cy.get(".notification__title"),
        successfullLabel: () => cy.get(".notification__description"),
    };

    verifyIsAtPage(){
        cy.url().should('include', '/registrationSuccess');
    }

    verifyRegistrationSuccessMessage(){
        this.elements.congratulationsLabel().invoke('text').should('contain', 'Congratulations!');
        this.elements.successfullLabel().invoke('text').should('contain', 'Registration successfully finished!').and('contain', 'Confirmation has been sent to you.')
    }
}
export const registrationSuccessPage = new RegistrationSuccessPage();