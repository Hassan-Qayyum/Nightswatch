describe('Mocha suit', ()=>{
    it("Confirming Page Title", (client)=>{
        client.url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('body')
        .assert.title('Filling Out Forms - Ultimate QA')
    })
    
})


// element.state.js

// describe("Mocha Suit", ()=>{
//     it("element.state",(client)=>{
//         client
//         .url('https://www.ultimateqa.com/filling-out-forms')
//         .getText('button[type="submit"]:nth-child(1)', (result)=>{
//         console.log(result.value)})
    
//         .setValue("#et_pb_contact_name_0", "Testing")
//         .getValue("#et_pb_contact_name_0", (result)=>{
//             console.log(result.value)
//         })
//         .isVisible("#et_pb_contact_name_0", (result)=>{
//             console.log(result.value)
//         })
//     })
// })


