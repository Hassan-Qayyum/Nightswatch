
const data = require("../globals/data")

describe("Ultimate QA Forms-Validations Cases",()=>{
    it("Should check the validations of the forms", (client)=>{
        data.forEach(({testCase,name,message,ScreenshotFileName,expected})=>{
            const FormPage = client.page.FormPage()
            FormPage
            .navigate()
            .verify.title('Filling Out Forms - Ultimate QA')
            .enterNameAndMessage(name,message)
            FormPage.submitLeftForm()
            FormPage.saveScreenshot(ScreenshotFileName)
            FormPage.verify.containsText('@lblLeftFormMessage',expected)

        })
    }),
    it("Subbmiut", (client)=>{
        client.saveScreenshot('./screen_evidence/FileName')

    })
})