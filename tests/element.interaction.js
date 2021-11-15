module.exports = {
    "Element Interaction": (client)=>{
        client.
        url('https://www.ultimateqa.com/filling-out-forms')
        .waitForElementVisible('#et_pb_contact_name_0')
        .setValue("#et_pb_contact_name_0", 'Testing')
        .pause(2000)
        .clearValue('#et_pb_contact_name_0')
        .pause(2000)
        .setValue("#et_pb_contact_name_0","Again Entering Value")
        .pause(2000)
        .clearValue('#et_pb_contact_name_0')   
        .pause(2000) 
        .waitForElementVisible('button[type="submit"]:nth-child(1)')
        .moveToElement('button[type="submit"]:nth-child(1)', 10, 10)
        .pause(2000)
    }
}