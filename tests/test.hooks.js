module.exports = {
    before: (client) =>{
    console.log("Starting Up")
    } ,
    
    after: (client) =>{
    console.log("Closing Down")
    },
    
    beforeEach: (client)=>{
    client.url('https://www.ultimateqa.com/filling-out-forms')
    },
    
    afterEach: (client)=>{
    console.log("Test Completed")
    },
    
    "Should verify page title": (client)=>{
    client.expect.title().which.contains('Filling Out Forms')
    },
    
    "Should verify page url": (client)=>{
    client.assert.urlContains('filling-out-forms')
    }
}