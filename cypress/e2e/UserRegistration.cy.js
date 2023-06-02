const { registrationSuccessPage } = require("../pages/RegistrationSuccessPage");
const { userRegistrationPage } = require("../pages/UserRegistrationPage");
const { mainPage } = require("../pages/mainPage");

//Test scenario to automate the user registration process
describe("User Registration", () =>{
    it("Register A New User", () =>{
        cy.log("Navigate To Demo Casino")
        cy.visit("/", {failOnStatusCode: false});
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        mainPage.closeWelcomeWindow();

    
        cy.log("Go To User Registration Page")
        mainPage.clickSignUp();
        userRegistrationPage.verifyIsAtPage();


        cy.log("Complete The User Registration Form")
        const d = new Date();
        let duser = String(d.toString().trim().replace(':','').replace(':','')).substring(3,22).toLowerCase();
        let newUser = {
            email: "gio" + duser + "@yopmail.com",
            currency: "EUR",
            password: "demoTest123!",
            bonus: false,
        }
        userRegistrationPage.typeEmail(newUser.email);
        userRegistrationPage.clickAcceptTerms();
        userRegistrationPage.selectCurrency(newUser.currency);
        userRegistrationPage.typePassword(newUser.password);
        userRegistrationPage.reenterPassword(newUser.password);
        userRegistrationPage.clickCreateAccount();


        cy.log("Verify The User Was Created")
        registrationSuccessPage.verifyIsAtPage();
        registrationSuccessPage.verifyRegistrationSuccessMessage();
    })
})