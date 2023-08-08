///<reference types="Cypress"/>

describe('Testing good reads web application', () => {
  
  it('good reads end to end test suite', () => {

    //for visiting goodread.com
    cy.visit('www.goodreads.com');

    //clicking on sign up with email button
    cy.contains("Sign up with email").click();

    //giving a wait of 2 seconed 
    cy.wait(2000);

    //for scrolling in to the bottom
    cy.scrollTo('bottom');
    
    //for clicking on sign in 
    cy.contains("Sign in").click();
    
    //for typeing email in input box
    cy.get("#ap_email").type("kehonab770@v1zw.com");  //put here your email
    
    //for typeing password in password input box
    cy.get("#ap_password").type("770@v1zw.com");   // put here your password 
    
    //validating sign in button color
    cy.get("#signInSubmit").should('have.css','background-color').and('eq','rgba(0, 0, 0, 0)');
    
    //click on sign in button 
    cy.get("#signInSubmit").click();
    
    //search for a book name the art of war
    cy.get('.searchBox__input--navbar').type("The art of war").dblclick();
    
    //click on drop down book
    cy.contains("The Art of Warby Sun Tzu").click();
    
    //clicking on want to read button 
    cy.contains("Want to read").click();
    
    //puting some wait
    cy.wait(5000)
    
    //for scrolling in to the top
    cy.scrollTo('top');
    
    //for redirect to my book page
    cy.contains("My Books").click();
    
    // click on remove the book 
    cy.get("img[title='Remove from my books']").click();
    
    //aserting a text book is remove sucessfully
    cy.get("div[class='box noticeBox'] div").should('have.text','\n            The Art of War was removed from your books.\n          ');
    
    //for clicking on profile
    cy.get("a[class='dropdown__trigger dropdown__trigger--profileMenu dropdown__trigger--personalNav'] img[alt='Ravi Badola']").click();
    
    //click on sign out
    cy.contains("Sign out").click();
  });
})
