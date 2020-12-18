describe('Visuals', () => {
    it('Visual Regression of LPPub login page', () => {
        cy.visit('/index.html', Cypress.on('window:before:load', (win) => {
            Object.defineProperty(win, 'self', {
                get: () => {
                    return window.top
                }
            })
        }))
        cy.contains('Loan Performance Data')
        cy.get('a[href="#Portfolio"]').should('have.length', 1).should('have.attr', 'title', 'Portfolio')
        cy.get('a[href="#Portfolio"]').within(() =>{
            cy.get('span').should('have.text', 'Home')
        })
        cy.compareSnapshot('login-page', 0.5)
    })

    it('Visual Regression of LPPub home page', () => {
        cy.visit('/index.html', Cypress.on('window:before:load', (win) => {
            Object.defineProperty(win, 'self', {
                get: () => {
                    return window.top
                }
            })
        }))
        cy.get('#loginUsername').type('praveen.chappidi@gmail.com').should('have.value', 'praveen.chappidi@gmail.com')
        cy.get('#loginPassword').type('q4JE:&Q9(T,J').should('have.value', 'q4JE:&Q9(T,J')
        cy.get('input[type="submit"]').should('be.visible').click()
        cy.intercept({
            method: 'GET',
            url: '*getPortfolioList.json*'
        }).as('downloadPortfolioList')
        cy.contains('Loan Performance Data')
        cy.get('a[href="#Portfolio"]').should('have.length', 1).should('have.attr', 'title', 'Portfolio')
        cy.get('a[href="#Portfolio"]').within(() =>{
            cy.get('span').should('have.text', 'Home')
        })
        cy.wait('@downloadPortfolioList').then(intercept => {
            assert(intercept.response.statusCode == 200, "Requests for userdownloaded portfolio data is successful")
        })
        cy.compareSnapshot('login-page', 0.5)
    })

    it('Visual Regression of LPPub Single-Family', () => {
        cy.visit('/index.html', Cypress.on('window:before:load', (win) => {
            Object.defineProperty(win, 'self', {
                get: () => {
                    return window.top
                }
            })
        }))
        cy.get('#loginUsername').type('praveen.chappidi@gmail.com').should('have.value', 'praveen.chappidi@gmail.com')
        cy.get('#loginPassword').type('q4JE:&Q9(T,J').should('have.value', 'q4JE:&Q9(T,J')
        cy.get('input[type="submit"]').should('be.visible').click()
        cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').should('be.visible')
        cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').then(($a) => {
            const linkVal = $a.attr('href')
            cy.visit(linkVal)
        })
        cy.intercept({
            method: 'GET',
            url: '*getSingleDownloadJson.json*'
        }).as('downloadSFData')
        cy.intercept({
            method: 'GET',
            url: '*getHarpDownloadJson.json*'
        }).as('downloadSFHARPData')
        cy.intercept({
            method: 'GET',
            url: '*getMonthlyDownloadJson.json*'
        }).as('downloadSFMonthlyData')
        cy.wait(['@downloadSFData', '@downloadSFHARPData', '@downloadSFMonthlyData']).then((interceptions) => {
            console.log(interceptions.length)
            interceptions.forEach(intercept => {assert(intercept.response.statusCode == 200, "Requests for Data are successful")})
        })
        cy.compareSnapshot('Single-Family_page', 0.2)
    })

    it('Visual Regression of LPPub MultiFamily', () => {
        cy.visit('/index.html', Cypress.on('window:before:load', (win) => {
            Object.defineProperty(win, 'self', {
                get: () => {
                    return window.top
                }
            })
        }))
        cy.get('#loginUsername').type('praveen.chappidi@gmail.com').should('have.value', 'praveen.chappidi@gmail.com')
        cy.get('#loginPassword').type('q4JE:&Q9(T,J').should('have.value', 'q4JE:&Q9(T,J')
        cy.get('input[type="submit"]').click()
        cy.get('a[href="#Multifamily_Loan_Performance_Data_Files"]').should('be.visible')
        cy.get('a[href="#Multifamily_Loan_Performance_Data_Files"]').then(($a) => {
            const linkVal = $a.attr('href')
            cy.visit(linkVal)
        })
        cy.intercept({
            method: 'GET',
            url: '*getMFDownloadJson.json*'
        }).as('downloadMFData')
        cy.wait('@downloadMFData').then(intercept => {
            assert(intercept.response.statusCode == 200, "Rest call for MFData is successful")
        })
        cy.compareSnapshot('Multifamily_page', 0.2)
    })

})
