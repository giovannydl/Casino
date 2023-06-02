import { favoriteGamesPage } from "../pages/FavoriteGamesPage";
import { loginPage } from "../pages/LoginPage";
import { profilePage } from "../pages/ProfilePage";
import { tableGamesPage } from "../pages/TableGamesPage";
import { mainPage } from "../pages/mainPage";

//Test scenario to validate a table game can be added to favorite games list

//Note: Some times to login the page ask for a captcha validation that cannot be automated, if 
//this window is displayed, the test could fail
describe("Add Feature Games", () => {
    it("Add A Table Game To The Feature Games List", () => {
        cy.log("Navigate To Demo Casino");
        cy.visit("/", {failOnStatusCode: false});
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        mainPage.closeWelcomeWindow();


        cy.log("Go To Login Page")
        mainPage.clickSignIn();
        mainPage.clickLoginWithPhoneOrEmail();
        loginPage.verifyIsAtPage();


        cy.log("Login With User Credentials");
        let user = {
            emailOrPhone: "gio.democasinoabc@yopmail.com",
            password: "Welcome2023!",
        }
        loginPage.typeEmailOrPhone(user.emailOrPhone);
        loginPage.typePassword(user.password);
        loginPage.clickSignIn();


        cy.log("Go To Table Games Page");
        cy.wait(4000);
        mainPage.clickGameCategories();
        mainPage.clickTableGames();
        tableGamesPage.verifyIsAtPage();


        cy.log("Add A Random Table Game To Favorites");
        let gameName = tableGamesPage.addRandomGameToFavorites();


        cy.log("Validate The Game Was Added To The Feature List");
        mainPage.clickGoToProfile();
        profilePage.verifyIsAtPage();
        profilePage.clickFeaturedGames();
        favoriteGamesPage.verifyIsAtPage();
        favoriteGamesPage.verifyGameIsFavorite();
    })
})