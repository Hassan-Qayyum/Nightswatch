module.exports = {
    "Expect Assertion": (client)=>{
        client
        .url('https://www.ultimateqa.com/filling-out-forms')
        .expect.element('button[type="submit"]:nth-child(1)').text.to.equal("Submit")

    },
    
    "Verify Assertion": (client)=>{
        client.url('https://www.ultimateqa.com/filling-out-forms')
        .verify.not.visible('button[type="submit"]:nth-child(1)') // this will fail but following assertion and test will execute
        .assert.visible('button[type="submit"]:nth-child(1)')

    },

    "Assert Assertion":(client)=>{
        client
        .url("https://www.ultimateqa.com/filling-out-forms")
        .assert.not.visible('button[type="submit"]:nth-child(1)') // this will fail and following assertion will not execute
        .assert.visible('button[type="submit"]:nth-child(1)')
    }
}