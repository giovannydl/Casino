class FavoriteGamesPage {
    elements = {
        games: () => cy.xpath("//li[@class='games-item']"),
    };
    
    verifyIsAtPage(){
        cy.url().should('include', 'favoriteGames');
    }

    verifyGameIsFavorite(game){
        this.elements.games().should('exist');
    }
}
export const favoriteGamesPage = new FavoriteGamesPage();