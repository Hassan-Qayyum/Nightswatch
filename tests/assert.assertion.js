module.exports = {
    "visible & not visible assertions": (client)=>{
        client
        .url('https://www.ultimateqa.com/filling-out-forms')
        .verify.not.visible('button[type="submit"]:nth-child(1)')
        .assert.visible('button[type="submit"]:nth-child(1)')

    },
    "Value & valueContains Assertions": (client)=>{
        client
        .setValue('#et_pb_contact_message_0','Setting Value For Testing')
        .assert.valueContains('#et_pb_contact_message_0',"Testing")
        .verify.value('#et_pb_contact_message_0','Setting Value For Testing')

    },
    "urlEquals & Title Aassertions":(client)=>{
        client.verify.urlEquals('https://www.ultimateqa.com/filling-out-forms')
        .verify.title('Filling Out Forms - Ultimate QA')
    },
    "attributeContains & containsText Assertions": (client)=>{
        client.verify.containsText('button[type="submit"]:nth-child(1)', 'Submit')
        .verify.attributeContains('#et_pb_contact_message_0', "placeholder", 'Message')
    },
    "cssClassPresent Assertion": (client)=>{
        client.verify.cssClassPresent('#et_pb_contact_message_0','input')
    }



}