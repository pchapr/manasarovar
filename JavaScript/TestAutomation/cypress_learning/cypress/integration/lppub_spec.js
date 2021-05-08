describe('Loan Performance Publication', () => {

    beforeEach(() => {
        cy.visit('/#', Cypress.on('window:before:load', (win) => {
            Object.defineProperty(win, 'self', {
                get: () => {
                    return window.top
                }
            })
        }))
        if (cy.url().should('include', 'userProduct')) {
            console.log("Session exists");
        } else {
            cy.contains('Login')
            cy.get('form[data-id="username-password-validator-form"]').should('have.length', 1)
            cy.get('#username').type('praveen.chappidi@gmail.com').should('have.value', 'praveen.chappidi@gmail.com')
            cy.get('#password').type('Tqpe#76nRmCP').should('have.value', 'Tqpe#76nRmCP')
            cy.get('button[type="submit"]').click()
        }
    })

    it('Data Dynamics - Products Page', function () {
        cy.url().should('include', 'userProduct')
        cy.get('dd-root').within(() => {
            cy.get('div[class="header"]').within(() => {
                cy.get('img').should('have.attr', 'alt', 'fannie mae logo')
                    .and('have.attr', 'src', 'assets/images/FM Logo.svg')
                cy.get('h1').should('have.text', 'Data Dynamics')
            })
            cy.get('h1[class="selectProductTitle"]').should('have.text','Select a Product')
            cy.get('dd-product-select').find('dd-card-link').should('have.length', 4)
            cy.get('dd-product-select').within(() => {
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=MBS"]').should('have.length', 1)
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=MBS"]').within(() => {
                    cy.get('dd-card').should('have.length', 1).children('.product-image').should('have.length', 1).and('have.attr', 'style', 'background-image: url("assets/images/product-MBS.jpg");')
                    cy.get('dd-card').children('dd-card-header').should('have.length', 1).children('dd-card-title').should('have.length', 1).and('have.text', 'MBS')
                    cy.get('dd-card').children('dd-card-content').should('have.length', 1).children('span').should('have.length', 1).and('have.text', "Mortgage-Backed Securities(MBS)")
                })
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=CAS"]').should('have.length', 1)
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=CAS"]').within(() => {
                    cy.get('dd-card').should('have.length', 1).children('.product-image').should('have.length', 1).and('have.attr', 'style', 'background-image: url("assets/images/product-CAS.jpg");')
                    cy.get('dd-card').children('dd-card-header').should('have.length', 1).children('dd-card-title').should('have.length', 1).and('have.text', 'CAS')
                    cy.get('dd-card').children('dd-card-content').should('have.length', 1).children('span').should('have.length', 1).and('have.text', "Single-Family Connecticut Avenue Securities®(CAS)")
                })
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=CIRT"]').should('have.length', 1)
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=CIRT"]').within(() => {
                    cy.get('dd-card').should('have.length', 1).children('.product-image').should('have.length', 1).and('have.attr', 'style', 'background-image: url("assets/images/product-CIRT.jpg");')
                    cy.get('dd-card').children('dd-card-header').should('have.length', 1).children('dd-card-title').should('have.length', 1).and('have.text', 'CIRT')
                    cy.get('dd-card').children('dd-card-content').should('have.length', 1).children('span').should('have.length', 1).and('have.text', "Single-Family Credit Insurance Risk Transfer™(CIRT™)")
                })
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=HP"]').should('have.length', 1)
                cy.get('dd-card-link').find('a[href="#/reportMenu;category=HP"]').within(() => {
                    cy.get('dd-card').should('have.length', 1).children('.product-image').should('have.length', 1).and('have.attr', 'style', 'background-image: url("assets/images/product-HP.jpg");')
                    cy.get('dd-card').children('dd-card-header').should('have.length', 1).children('dd-card-title').should('have.length', 1).and('have.text', 'HP')
                    cy.get('dd-card').children('dd-card-content').should('have.length', 1).children('span').should('have.length', 1).and('have.text', "Historical Loan Credit Performance Data")
                })
            })
        })
    })

    // const ssoToken = '';
    // it('Login Successful', function (){
    //     var ssoAuthFlowUrlStr = '';
    //     cy.request('GET',
    //         'https://auth.pingone.com/4c2b23f9-52b1-4f8f-aa1f-1d477590770c/as/authorize?client_id=fa3d4dbf-df5a-4270-ad90-28977581fb5a&response_type=code&scope=openid%20profile%20email%20phone&redirect_uri=https://datadynamics.fanniemae.com/data-dynamics/home.html').
    //     then((response) => {
    //         let locationUrlStr = response.allRequestResponses[0].['Response Headers'].['location']
    //         let url = new URL(locationUrlStr)
    //         let flowId = url.searchParams.get('flowId')
    //         ssoAuthFlowUrlStr = "https://auth.pingone.com/4c2b23f9-52b1-4f8f-aa1f-1d477590770c/flows/"+flowId
    //         console.log("URL Request Str: "+ssoAuthFlowUrlStr)
    //         cy.request('OPTIONS', ssoAuthFlowUrlStr).then((ssoAuthResponse) => {
    //             console.log("response: "+ssoAuthResponse)
    //             cy.request({
    //                 method: 'POST',
    //                 url: ssoAuthFlowUrlStr,
    //                 headers: {
    //                     'content-type': 'application/vnd.pingidentity.usernamePassword.check+json'
    //                 },
    //                 body: '{username: "praveen.chappidi@gmail.com", password: "Tqpe#76nRmCP"}'
    //             }).then((ssoAuthResponse) => {
    //                 console.log("response: "+ssoAuthResponse)
    //             })
    //         })
    //         // console.log("Flow Id: "+flowId)
    //         // console.log("Location: "+response.headers)
    //         // console.log("Location: "+response.allRequestResponses[0].['Response Headers'].['location'])
    //     })
    //     //console.log("URL Request Str: "+ssoAuthFlowUrlStr)
    //     // let tokenUrlStr = "https://auth.pingone.com/4c2b23f9-52b1-4f8f-aa1f-1d477590770c/as/resume?flowId="+flowId
    //     // cy.request('POST', tokenUrlStr).then((response) => {
    //     //     ssoToken = response.allRequestResponses[0].['Response Headers'].['location']
    //     //     console.log("SSO Token is: "+ssoToken)
    //     // })
    //     // cy.get('#username').type('praveen.chappidi@gmail.com').should('have.value', 'praveen.chappidi@gmail.com')
    //     // cy.get('#password').type('Tqpe#76nRmCP').should('have.value', 'Tqpe#76nRmCP')
    //     // cy.get('input[type="submit"]').click()
    // })

    // it('Login Successful', function () {
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getPortfolioList.json*'
    //     }).as('downloadPortfolioList')
    //     cy.url().should('include', 'Portfolio')
    //     cy.contains('Loan Performance Data')
    //     cy.get('a[href="#Portfolio"]').should('have.length', 1).should('have.attr', 'title', 'Portfolio')
    //     cy.get('a[href="#Portfolio"]').within(() =>{
    //         cy.get('span').should('have.text', 'Home')
    //     })
    //     cy.wait('@downloadPortfolioList').then(intercept => {
    //         assert(intercept.response.statusCode == 200, "Requests for userdownloaded portfolio data is successful")
    //     })
    // });

    // it('Single Family Page Load', function () {
    //     cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').should('be.visible')
    //     cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').then(($a) => {
    //         const linkVal = $a.attr('href')
    //         cy.visit(linkVal)
    //     })
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getSingleDownloadJson.json*'
    //     }).as('downloadSFData')
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getHarpDownloadJson.json*'
    //     }).as('downloadSFHARPData')
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getMonthlyDownloadJson.json*'
    //     }).as('downloadSFMonthlyData')
    //     cy.wait(['@downloadSFData', '@downloadSFHARPData', '@downloadSFMonthlyData']).then((interceptions) => {
    //         console.log(interceptions.length)
    //         interceptions.forEach(intercept => {assert(intercept.response.statusCode == 200, "Requests for Data are successful")})
    //     })
    //     cy.get('div#Single-Family_Loan_Performance_Data_Files').within(() => {
    //       cy.contains('Single-Family Loan Performance Data Files')
    //     })
    // });
    //
    // it('Single Family Page Dataset Validation', function () {
    //     cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').click()
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getSingleDownloadJson.json*'
    //     }).as('downloadSFData')
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getHarpDownloadJson.json*'
    //     }).as('downloadSFHARPData')
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getMonthlyDownloadJson.json*'
    //     }).as('downloadSFMonthlyData')
    //     cy.wait(['@downloadSFData', '@downloadSFHARPData', '@downloadSFMonthlyData']).then((interceptions) => {
    //         console.log(interceptions.length)
    //         interceptions.forEach(intercept => {assert(intercept.response.statusCode == 200, "Requests for Data are successful")})
    //     })
    //     cy.get('table[id="singledownloaddata"]').should('have.length', 1)
    //     cy.get('table[id="singledownloaddata"]').within(() => {
    //         cy.get('tr[id=1]').should('have.length', 1)
    //         cy.get('td[title="2000Q1-2020Q2 Acquisition and Performance"]').should('have.length', 1)
    //         cy.get('td[title="Acquisition and Performance File (38GB)"]').should('have.length', 1)
    //         cy.get('td[title="Acquisition and Performance File (38GB)"]').within(() => {
    //             cy.get('a').should('have.text', 'Acquisition and Performance File (38GB)')
    //                 .should('have.attr', 'href', '#')
    //                 .should('have.attr', 'onClick', 'javascript:window.location.href=\'publish_aws?file=Performance_All.zip\'; $(\'#singledownloaddata\').jqGrid().trigger(\'reloadGrid\'); ')
    //         })
    //     })
    //
    //     cy.get('table[id="harpdownloaddata"]').within(() => {
    //         cy.get('tr[id=1]').should('have.length', 1)
    //         cy.get('td[title="HARP Acquisitions, Performance and Mapping Files"]').should('have.length', 1)
    //         cy.get('td[title="HARP Files"]').should('have.length', 1)
    //         cy.get('td[title="HARP Files"]').within(() => {
    //             cy.get('a').should('have.text', 'HARP Files')
    //                 .should('have.attr', 'href', '#')
    //                 .should('have.attr', 'onClick', 'javascript:window.location.href=\'publish_aws?file=HARP_Files.zip\'; $(\'#singledownloaddata\').jqGrid().trigger(\'reloadGrid\'); ')
    //         })
    //     })
    // });
    //
    // it('Single Family Loan Performance Data Validation', () => {
    //     cy.get('a[href="#Single-Family_Loan_Performance_Data_Files"]').click()
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getSingleDownloadJson.json*'
    //     }).as('downloadSFData')
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getHarpDownloadJson.json*'
    //     }).as('downloadSFHARPData')
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getMonthlyDownloadJson.json*'
    //     }).as('downloadSFMonthlyData')
    //     cy.wait(['@downloadSFData', '@downloadSFHARPData', '@downloadSFMonthlyData']).then((interceptions) => {
    //         console.log(interceptions.length)
    //         interceptions.forEach(intercept => {assert(intercept.response.statusCode == 200, "Requests for Data are successful")})
    //     })
    //     cy.get('div[id="gbox_downloadmonthly"]').within(() => {
    //         cy.get('span[class="ui-jqgrid-title"]').should('have.text', 'Quarterly Single-Family Loan Performance (Primary) Dataset')
    //         cy.get('table[class="ui-jqgrid-htable"]').within(() => {
    //             cy.get('tr').should('have.attr', 'role', 'rowheader')
    //                 .should('have.length', 1)
    //             cy.get('th').should('have.attr', 'role', 'columnheader')
    //                 .should('have.length', 5)
    //
    //             cy.get('th[id="downloadmonthly_fileName"]').within(() => {
    //                 cy.get('#jqgh_fileName').should("have.text", "Year")
    //             })
    //
    //             cy.get('th[id="downloadmonthly_archiveFilesQ1"]').within(() => {
    //                 cy.get('div#jqgh_archiveFilesQ1').should("have.text", "Q1 Records")
    //             })
    //
    //             cy.get('th[id="downloadmonthly_archiveFilesQ2"]').within(() => {
    //                 cy.get('div#jqgh_archiveFilesQ2').should("have.text", "Q2 Records")
    //             })
    //
    //             cy.get('th[id="downloadmonthly_archiveFilesQ3"]').within(() => {
    //                 cy.get('div#jqgh_archiveFilesQ3').should("have.text", "Q3 Records")
    //             })
    //
    //             cy.get('th[id="downloadmonthly_archiveFilesQ4"]').within(() => {
    //                 cy.get('div#jqgh_archiveFilesQ4').should("have.text", "Q4 Records")
    //             })
    //         })
    //
    //         cy.get('table#downloadmonthly').should("have.length", 1)
    //
    //         cy.get('table#downloadmonthly').within(() => {
    //             let numberOfYears = getNumberOfDisclosureYears()
    //             cy.get('tr').should('have.length', numberOfYears)
    //             let currentYear = getCurrentYear();
    //             let currQuarter = getCurrentQuarter();
    //             let rowNumber = 0;
    //             for (let disYear = getDisclosureStartYear(); disYear <= getCurrentYear(); disYear++) {
    //                 let q1FileStr = disYear + 'Q1.zip'
    //                 let q2FileStr = disYear + 'Q2.zip'
    //                 let q3FileStr = disYear + 'Q3.zip'
    //                 let q4FileStr = disYear + 'Q4.zip'
    //                 let q1OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q1FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
    //                 let q2OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q2FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
    //                 let q3OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q3FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
    //                 let q4OnclickStr = 'javascript:window.location.href=\'publish_aws?file=' + q4FileStr + '\'; $(\'#downloadmonthly\').jqGrid().trigger(\'reloadGrid\'); '
    //                 cy.get('tr[role="row"]').eq(rowNumber).should('have.attr', 'id', disYear)
    //                 let quatersPublished = 0
    //                 if(disYear < (currentYear-1)) {
    //                     quatersPublished = 4;
    //                 } else {
    //                     if(disYear == (currentYear-1)){
    //                         if(currQuarter == 1) {
    //                             quatersPublished = 2
    //                         } else if(currQuarter == 2) {
    //                             quatersPublished = 3
    //                         } else if(currQuarter >= 3) {
    //                             quatersPublished = 4
    //                         }
    //                     } else if(disYear == currentYear){
    //                         quatersPublished = (currQuarter < 2 ? 0 : currQuarter-2)
    //                     }
    //                 }
    //                 cy.get('tr[role="row"]').eq(rowNumber).within(() => {
    //                     cy.get('td[role="gridcell"]').eq(0).should('have.text', disYear)
    //                     switch (quatersPublished) {
    //                         case 1:
    //                             cy.get('td[role="gridcell"]').eq(1)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance')
    //                                 .should('have.attr', 'onclick', q1OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(2).should('have.text', 'Not Available')
    //                             cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
    //                             cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
    //                             break
    //                         case 2:
    //                             cy.get('td[role="gridcell"]').eq(1)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance')
    //                                 .should('have.attr', 'onclick', q1OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(2)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(3).should('have.text', 'Not Available')
    //                             cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
    //                             break
    //                         case 3:
    //                             cy.get('td[role="gridcell"]').eq(1)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance')
    //                                 .should('have.attr', 'onclick', q1OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(2)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(3)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q3OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(4).should('have.text', 'Not Available')
    //                             break
    //                         case 4:
    //                             cy.get('td[role="gridcell"]').eq(1)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance')
    //                                 .should('have.attr', 'onclick', q1OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(2)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q2OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(3)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q3OnclickStr)
    //                             cy.get('td[role="gridcell"]').eq(4)
    //                                 .contains('a').should('have.text', 'Acquisition and Performance').should('have.attr', 'onclick', q4OnclickStr)
    //                             break
    //                     }
    //                 })
    //                 rowNumber++
    //             }
    //         })
    //     })
    //
    // })
    //
    // it('Multifamily Page Load', function () {
    //     cy.get('a[href="#Multifamily_Loan_Performance_Data_Files"]').click()
    //     cy.wait(300)
    //     cy.get('div#Multifamily_Loan_Performance_Data_Files').within(() => {
    //         cy.contains('Multifamily Loan Performance Data Files')
    //     })
    // });
    //
    // it('Multifamily Data Validation', function () {
    //     cy.get('a[href="#Multifamily_Loan_Performance_Data_Files"]').click()
    //     cy.intercept({
    //         method: 'GET',
    //         url: '*getMFDownloadJson.json*'
    //     }).as('downloadMFData')
    //     cy.wait('@downloadMFData').then(intercept => {
    //         assert(intercept.response.statusCode == 200, "Rest call for MFData is successful")
    //     })
    //     cy.get('table[id="mfdownloaddata"]').should('have.length', 1)
    //     cy.get('table[id="mfdownloaddata"').within(() => {
    //         cy.get('tr[role="row"]').eq(0).within(() => {
    //             cy.get('td[role="gridcell"]').should('have.attr', 'title', 'Multifamily Loan Performance Data')
    //             cy.get('td[role="gridcell"]').within(() => {
    //                 cy.get('b').should('have.text', 'Multifamily Loan Performance Data')
    //             })
    //         })
    //         cy.get('tr[role="row"]').eq(1).within(() => {
    //             cy.get('td[role="gridcell"]').should('have.attr', 'title', 'Multifamily Loan Performance Data File')
    //             cy.get('td[role="gridcell"]').within(() => {
    //                 cy.get('a').should('have.text', 'Multifamily Loan Performance Data File')
    //                     .should('have.attr', 'onclick', 'javascript:window.location.href=\'publish_aws?file=Multifamily.zip\'; $(\'#singledownloaddata\').jqGrid().trigger(\'reloadGrid\'); ')
    //             })
    //         })
    //     })
    // });


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
