module.exports = {
    'Finding Elements': function (client){
        client
        .url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('button[name="et_builder_submit_button"]')
        // .waitForElementNotVisible('button[name="et_builder_submit_button"]')
        // .element('css selector', 'body', function(result){
        .elements('css selector','input[type="text"]',function(result){
            console.log(result.value)
        });
        
        
    }

    // 'es6 async demo Test': async function(client){
    //     const someVariable = await client.element('css selector', 'body');
    //     console.log('result value is:', someVariable.value);
    // }
}