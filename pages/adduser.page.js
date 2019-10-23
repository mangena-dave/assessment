class AddusersPage {
    get firstName() {return $('tbody tr:nth-child(1) td:nth-child(2) input')}
    get lastName() {return $('tbody tr:nth-child(2) td:nth-child(2) input')}
    
    get userName() { return $('tbody tr:nth-child(3) td:nth-child(2) input')}
   
    get password() { return $('tbody tr:nth-child(4) td:nth-child(2) input')}

    company(index) { return $(`label.radio:nth-child(${index}) input`) }

    customerRole(index) {return $(`select option[value='${index}']`)}

    get email() { return $('tbody tr:nth-child(7) td:nth-child(2) input')}
    get cellPhone() { return $('tbody tr:nth-child(8) td:nth-child(2) input')}
    get saveBtn(){ return $('.btn-success')}

    addedUserName(index){ return $(`table tbody tr:nth-child(${index}) td:nth-child(3)`)}

    getAddedUserName(index){
        this.addedUserName(index).waitForDisplayed();
        return this.addedUserName(index).getText();
    }

    enterFirstName(text){
        this.firstName.waitForDisplayed();
        this.firstName.clearValue();
        this.firstName.setValue(text);
    }

    enterlastName(text){
        this.lastName.waitForDisplayed();
        this.lastName.setValue(text);
    }


    enterUserName(text){
        var x = Math.floor((Math.random() * 10) + 1);
        this.userName.waitForDisplayed();
        this.userName.setValue(text+=x);
    }

    enterPassword(text){
        this.password.waitForDisplayed();
        this.password.setValue(text);
    }

    selectCompany(index){
        this.company(index).waitForDisplayed()
        this.company(index).click();
    }

    clickOnCustomerBBB(){
        this.companyBBB.waitForDisplayed()
        this.companyBBB.click();
    }

    selectCustomerRole(index){
        this.customerRole(index).waitForDisplayed()
        this.customerRole(index).click();
    }


    enterEmail(text){
        this.email.waitForDisplayed();
        this.email.setValue(text);
    }

    enterCellphonel(text){
        this.cellPhone.waitForDisplayed();
        this.cellPhone.setValue(text);
    }

    clickOnSaveBtn(){
        this.saveBtn.waitForDisplayed()
        this.saveBtn.click();
    }



}
module.exports = new AddusersPage()
