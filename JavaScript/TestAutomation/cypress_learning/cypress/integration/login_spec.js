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
        cy.url().should('include', 'Portfolio')
    });

    it('Single Family Page Load', function () {
        cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').click()
        cy.wait(300)
        cy.get('div#Single-Family_Loan_Performance_Data_Files').within(() => {
          cy.contains('Single-Family Loan Performance Data Files')
        })
    });

    it('Single Family Page Dataset Validation', function () {
        cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').click()
        cy.wait(300)
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
        cy.wait(300)
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
                let disQuarter = getCurrentQuarter();
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
                    if (disYear != currentYear) {
                        cy.get('tr[role="row"]').eq(rowNumber).within(() => {
                            cy.get('td[role="gridcell"]').eq(0).should('have.text', disYear)
                            cy.get('td[role="gridcell"]').eq(1)
                                .contains('a').should('have.text', 'Acquisition and Performance')
                                .should('have.attr', 'onclick', q1OnclickStr)
                            cy.get('td[role="gridcell"]').eq(2)
                                .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
                            cy.get('td[role="gridcell"]').eq(3)
                                .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q3OnclickStr)
                            cy.get('td[role="gridcell"]').eq(4)
                                .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q4OnclickStr)
                        })
                    } else {
                        cy.get('tr[role="row"]').eq(rowNumber).within(() => {
                            cy.get('td[role="gridcell"]').eq(0).should('have.text', disYear)
                            if (disQuarter == 0) {
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                            } else if (disQuarter == 1) {
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                            } else if (disQuarter == 2) {
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                            } else if (disQuarter == 3) {
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q3OnclickStr)
                                cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
                            } else {
                                cy.get('td[role="gridcell"]').eq(1)
                                    .contains('a').should('have.text', 'Acquisition and Performance')
                                    .should('have.attr', 'onclick', q1OnclickStr)
                                cy.get('td[role="gridcell"]').eq(2)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
                                cy.get('td[role="gridcell"]').eq(3)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q3OnclickStr)
                                cy.get('td[role="gridcell"]').eq(4)
                                    .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q4OnclickStr)
                            }
                        })
                    }
                    rowNumber++
                }
            })
        })

    })
})

function getCurrentQuarter() {
    var month = new Date().getMonth() + 1;
    var quarter = Math.ceil(month / 3);
    var disQuarter = quarter - 2;
    if (disQuarter < 0) {
        return 0;
    }
    return disQuarter;
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
