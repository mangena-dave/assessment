class WebtablesPage {
    get tableHeader() { return $('.smart-table-header-row') }
    get addUser() {return $('.btn-link.pull-right') }

    table() {return $('.smart-table .smart-table-header-row')}

    addedUserName(index){ return $(`table tbody tr:nth-child(${index}) td:nth-child(3)`)}

    getAddedUserName(index){
        this.addedUserName(index).waitForDisplayed();
        return this.addedUserName(index).getText();
    }


    clickAddUser(){
        this.addUser.waitForDisplayed();
        this.addUser.click();
    }

}

module.exports = new WebtablesPage()
