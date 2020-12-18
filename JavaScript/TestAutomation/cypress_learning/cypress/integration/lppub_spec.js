describe('Loan Performance Publication', () => {

    beforeEach(() => {
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
    })

    it('Login Successful', function () {
        cy.intercept({
            method: 'GET',
            url: '*getPortfolioList.json*'
        }).as('downloadPortfolioList')
        cy.url().should('include', 'Portfolio')
        cy.contains('Loan Performance Data')
        cy.get('a[href="#Portfolio"]').should('have.length', 1).should('have.attr', 'title', 'Portfolio')
        cy.get('a[href="#Portfolio"]').within(() =>{
            cy.get('span').should('have.text', 'Home')
        })
        cy.wait('@downloadPortfolioList').then(intercept => {
            assert(intercept.response.statusCode == 200, "Requests for userdownloaded portfolio data is successful")
        })
    });

    it('Single Family Page Load', function () {
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
        cy.get('div#Single-Family_Loan_Performance_Data_Files').within(() => {
          cy.contains('Single-Family Loan Performance Data Files')
        })
    });

    it('Single Family Page Dataset Validation', function () {
        cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').click()
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
        cy.get('table[id="singledownloaddata"]').should('have.length', 1)
        cy.get('table[id="singledownloaddata"]').within(() => {
            cy.get('tr[id=1]').should('have.length', 1)
            cy.get('td[title="2000Q1-2020Q2 Acquisition and Performance"]').should('have.length', 1)
            cy.get('td[title="Acquisition and Performance File (38GB)"]').should('have.length', 1)
            cy.get('td[title="Acquisition and Performance File (38GB)"]').within(() => {
                cy.get('a').should('have.text', 'Acquisition and Performance File (38GB)')
                    .should('have.attr', 'href', '#')
                    .should('have.attr', 'onClick', 'javascript:window.location.href=\'publish_aws?file=Performance_All.zip\'; $(\'#singledownloaddata\').jqGrid().trigger(\'reloadGrid\'); ')
            })
        })

        cy.get('table[id="harpdownloaddata"]').within(() => {
            cy.get('tr[id=1]').should('have.length', 1)
            cy.get('td[title="HARP Acquisitions, Performance and Mapping Files"]').should('have.length', 1)
            cy.get('td[title="HARP Files"]').should('have.length', 1)
            cy.get('td[title="HARP Files"]').within(() => {
                cy.get('a').should('have.text', 'HARP Files')
                    .should('have.attr', 'href', '#')
                    .should('have.attr', 'onClick', 'javascript:window.location.href=\'publish_aws?file=HARP_Files.zip\'; $(\'#singledownloaddata\').jqGrid().trigger(\'reloadGrid\'); ')
            })
        })
    });

    it('Single Family Loan Performance Data Validation', () => {
        cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').click()
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
        cy.get('div[id="gbox_downloadmonthly"]').within(() => {
            cy.get('span[class="ui-jqgrid-title"]').should('have.text', 'Quarterly Single-Family Loan Performance (Primary) Dataset')
            cy.get('table[class="ui-jqgrid-htable"]').within(() => {
                cy.get('tr').should('have.attr', 'role', 'rowheader')
                    .should('have.length', 1)
                cy.get('th').should('have.attr', 'role', 'columnheader')
                    .should('have.length', 5)

                cy.get('th[id="downloadmonthly_fileName"]').within(() => {
                    cy.get('#jqgh_fileName').should("have.text", "Year")
                })

                cy.get('th[id="downloadmonthly_archiveFilesQ1"]').within(() => {
                    cy.get('div#jqgh_archiveFilesQ1').should("have.text", "Q1 Records")
                })

                cy.get('th[id="downloadmonthly_archiveFilesQ2"]').within(() => {
                    cy.get('div#jqgh_archiveFilesQ2').should("have.text", "Q2 Records")
                })

                cy.get('th[id="downloadmonthly_archiveFilesQ3"]').within(() => {
                    cy.get('div#jqgh_archiveFilesQ3').should("have.text", "Q3 Records")
                })

                cy.get('th[id="downloadmonthly_archiveFilesQ4"]').within(() => {
                    cy.get('div#jqgh_archiveFilesQ4').should("have.text", "Q4 Records")
                })
            })

            cy.get('table#downloadmonthly').should("have.length", 1)

            cy.get('table#downloadmonthly').within(() => {
                let numberOfYears = getNumberOfDisclosureYears()
                cy.get('tr').should('have.length', numberOfYears)
                let currentYear = getCurrentYear();
                let currQuarter = getCurrentQuarter();
                let rowNumber = 0;
                for (let disYear = getDisclosureStartYear(); disYear <= getCurrentYear(); disYear++) {
                    let q1FileStr = disYear + 'Q1.zip'
                    let q2FileStr = disYear + 'Q2.zip'
                    let q3FileStr = disYear + 'Q3.zip'
                    let q4FileStr = disYear + 'Q4.zip'
                    let q1OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q1FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
                    let q2OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q2FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
                    let q3OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q3FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
                    let q4OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q4FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
                    cy.get('tr[role="row"]').eq(rowNumber).should('have.attr', 'id', disYear)
                    let quatersPublished = 0
                    if(disYear < (currentYear-1)) {
                        quatersPublished = 4;
                    } else {
                        if(disYear == (currentYear-1)){
                            if(currQuarter == 1) {
                                quatersPublished = 2
                            } else if(currQuarter == 2) {
                                quatersPublished = 3
                            } else if(currQuarter >= 3) {
                                quatersPublished = 4
                            }
                        } else if(disYear == currentYear){
                            quatersPublished = (currQuarter < 2 ? 0 : currQuarter-2)
                        }
                    }
                    cy.get('tr[role="row"]').eq(rowNumber).within(() => {
                        cy.get('td[role="gridcell"]').eq(0).should('have.text', disYear)
                        switch (quatersPublished) {
                            case 1:
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                                break
                            case 2:
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                                break
                            case 3:
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q3OnclickStr)
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                                break
                            case 4:
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q3OnclickStr)
                                cy.get('td[role="gridcell"]').eq(4)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q4OnclickStr)
                                break
                        }
                    })
                    rowNumber++
                }
            })
        })

    })

    it('Multifamily Page Load', function () {
        cy.get('a[href="#Multifamily_Loan_Performance_Data_Files"]').click()
        cy.wait(300)
        cy.get('div#Multifamily_Loan_Performance_Data_Files').within(() => {
            cy.contains('Multifamily Loan Performance Data Files')
        })
    });

    it('Multifamily Data Validation', function () {
        cy.get('a[href="#Multifamily_Loan_Performance_Data_Files"]').click()
        cy.intercept({
            method: 'GET',
            url: '*getMFDownloadJson.json*'
        }).as('downloadMFData')
        cy.wait('@downloadMFData').then(intercept => {
            assert(intercept.response.statusCode == 200, "Rest call for MFData is successful")
        })
        cy.get('table[id="mfdownloaddata"]').should('have.length', 1)
        cy.get('table[id="mfdownloaddata"').within(() => {
            cy.get('tr[role="row"]').eq(0).within(() => {
                cy.get('td[role="gridcell"]').should('have.attr', 'title', 'Multifamily Loan Performance Data')
                cy.get('td[role="gridcell"]').within(() => {
                    cy.get('b').should('have.text', 'Multifamily Loan Performance Data')
                })
            })
            cy.get('tr[role="row"]').eq(1).within(() => {
                cy.get('td[role="gridcell"]').should('have.attr', 'title', 'Multifamily Loan Performance Data File')
                cy.get('td[role="gridcell"]').within(() => {
                    cy.get('a').should('have.text', 'Multifamily Loan Performance Data File')
                        .should('have.attr', 'onclick', 'javascript:window.location.href=\'publish_aws?file=Multifamily.zip\'; $(\'#singledownloaddata\').jqGrid().trigger(\'reloadGrid\'); ')
                })
            })
        })
    });


})

function getCurrentQuarter() {
    var month = new Date().getMonth() + 1;
    var quarter = Math.ceil(month / 3);
    return quarter;
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function getDisclosureStartYear() {
    return 2000;
}

function getNumberOfDisclosureYears() {
    let year2000 = getDisclosureStartYear();
    let yearNow = getCurrentYear();
    return (yearNow - year2000) + 1;
}
