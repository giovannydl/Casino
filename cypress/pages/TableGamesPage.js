class TableGamesPage {
    elements = {
        favoriteButton: (gameNumber) => cy.xpath("//li[@class='games-item']["+gameNumber+"]//a").first(),
        gameItem: (gameNumber) => cy.xpath("//li[@class='games-item']["+gameNumber+"]"),
        gameName: (gameNumber) => cy.xpath("//li[@class='games-item']["+gameNumber+"]//p"),
    }

    verifyIsAtPage(){
        cy.url().should('include', 'gameGroup/table-games');
    }

    addRandomGameToFavorites(){
        let length;
        cy.xpath("//li[@class='games-item']").then(($value) => {
            length = $value.length
            const number = (Math.floor(Math.random() * length)) + 1;
            this.elements.gameItem(number).trigger('mouseover');
            this.elements.favoriteButton(number).click();
        })
    }
}
export const tableGamesPage = new TableGamesPage();