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

https://user-images.githubusercontent.com/85807711/181684497-5d97b2a5-2bc0-4db6-842a-c9a57dad1674.mp4
