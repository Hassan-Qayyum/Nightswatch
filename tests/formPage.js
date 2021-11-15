module.exports = {
    // beforeEach: (client)=>{
    //     client.url(`${client.launch_url}/filling-out-forms`)
    // },
    "Should successfully fill out the left form fields - Page Obbject":function (client){
        const FormPage = client.page.FormPage();
        FormPage
            .navigate()
            .verify.title('Filling Out Forms - Ultimate QA')
            .enterNameAndMessage('John','Entering the message')
        FormPage
            .submitLeftForm()
        FormPage.verify.containsText('@lblLeftFormMessage', 'Thanks for contacting us')
        
        const rightForm = FormPage.section.rightForm
        rightForm
            .expect.element('@txtName').to.be.visible

    }
}