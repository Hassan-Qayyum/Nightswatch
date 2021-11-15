module.exports = {

    "Visible": (client)=>{
        client
        .url('https://www.ultimateqa.com/filling-out-forms')
        .expect.element('button[type="submit"]:nth-child(1)').text.equal('Submit')
    },
    "urlEquals & Title Aassertions":(client)=>{
        client.expect.title().to.equal('Filling Out Forms - Ultimate QA')
        .url('https://www.ultimateqa.com/filling-out-forms')
        .pause(2000)
        .assert.urlContains('/filling-out-forms')

    },
    "Value & valueContains Assertions": (client)=>{
        client
        .setValue('#et_pb_contact_message_0','Setting Value For Testing')
        .expect.element('#et_pb_contact_message_0').to.have.value.which.contain("Setting")
    },

    "attributeContains & containsText Assertions": (client)=>{
        client.expect.element('#et_pb_contact_message_0').to.have.attribute("placeholder").which.contain('Message')
    },
    "cssClassPresent Assertion": (client)=>{
        client.expect.element('#et_pb_contact_message_0').to.have.attribute('class').which.contain('input')
    }



}