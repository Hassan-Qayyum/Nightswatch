describe("Filling the Ultimate QA Forms with Mocha Suit", ()=>{
    it("Should fill the left form",(client)=>{
        const FormPage = client.page.FormPage()
        FormPage
            .navigate()
            .verify.title('Filling Out Forms - Ultimate QA')
            .enterNameAndMessage('Hassan', 'I am submitting the form')
        FormPage.submitLeftForm()
        FormPage.verify.containsText('@lblLeftFormMessage', "Thanks for contacting us")


        const rightForm = FormPage.section.rightForm
        rightForm.expect.element('@txtName').to.be.visible
    })
})