# Cypress
AgilizeiBootcamp - chapterV

In this chapter, the goals were: 
* writing UI test isolating frontend from backend using cy.intercept() for the registration journey 
* writing e2e test 

Interaction with local storage was also explored to gain speed in tests in logged areas of the website.

To improve the code quality:
* two custom commands were created - cy.login() and cy.token()
* separation of responsibilities with Page Objects was done
* ESLint plugin for code standardization has been installed

Again, it was configured a Github Actions with NodeJS for CI, but this time with scheduled execution, workflow dispatch and artifact upload.
