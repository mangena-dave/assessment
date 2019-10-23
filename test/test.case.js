const webtablesPage = require("../pages/webtables.page")
const adduser = require("../pages/adduser.page")
const userDetails = require("../testData/userDetails")


describe('Task 2 Web ',function () {
    it('Navigate to web',() => {
        browser.url(`${browser.options.baseUrl}/angularjs-protractor/webtables/`);
    });
    it('Validate that you are on the User List Table',() => {
        webtablesPage.table().waitForExist()
        expect(webtablesPage.table().isExisting()).equals(true)
    });
    for (let i = 0; i < userDetails.length; i++) {
        it('Click Add user', () => {
            webtablesPage.clickAddUser();
        });        
        it('Add users with details', () => {
            adduser.enterFirstName(userDetails[i].firstname);
            adduser.enterlastName(userDetails[i].lastname);
            adduser.enterUserName(userDetails[i].userName);
            adduser.enterPassword(userDetails[i].password);
            adduser.selectCompany(1+i);
            expect(adduser.company(1+i).isSelected()).equals(true)
            adduser.selectCustomerRole(1+i);
            adduser.enterEmail(userDetails[i].email);
            adduser.enterCellphonel(userDetails[i].celphone);
            adduser.clickOnSaveBtn();
        });
        
        it('Ensure that User Name (*) is unique on each run',()=> {
            expect(webtablesPage.getAddedUserName(1)).not.equal(userDetails[1].userName)
            expect(webtablesPage.getAddedUserName(2)).not.equal(userDetails[i].userName);
        });
    }
    it('Ensure that your users are added to the list',()=> {
        expect(webtablesPage.getAddedUserName(1)).to.exist
        expect(webtablesPage.getAddedUserName(2)).to.exist
    });
});