module.exports = {
    beforeEach: (client)=>{
        client.url(`${client.launch_url}/filling-out-forms`)
    },
    "Simple Test => Filling out left form ": async (client)=>{
            client.setValue('[id = "et_pb_contact_name_0"]', 'Testing')
            .pause(5000)
            .setValue('[id = "et_pb_contact_message_0"]', 'Wrting text area')
            .pause(5000)

            .click('[class = "et_pb_contact_submit et_pb_button"]')
            .pause(5000)
            .expect.element('[class="et-pb-contact-message"]').text.to.be.equal('Thanks for contacting us')
    },
    "verify Error message in case of empty form": (client)=>{
        client
            .refresh()
            .pause(5000)
            .click('[class = "et_pb_contact_submit et_pb_button"]')
            .pause(5000)
            .verify.containsText('[class="et-pb-contact-message"]', "Please, fill in the following fields:\nName\nMessage")

    }
}