module.exports = {
    "Confirming Form Page Title": (client)=>{
        client.url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('body')
        .assert.title('Filling Out Forms - Ultimate QA')


    }
}