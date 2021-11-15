module.exports = {
    "User Actions & Prompts": (client) =>{
        client
        .url("https://www.ultimateqa.com/filling-out-forms")
        .pause(2000)
        .setValue('#et_pb_contact_message_0'," Testing sequence of strokes to an active elements...")
        .pause(2000)
        .keys(client.Keys.BACK_SPACE)
        .pause(2000)
        .keys(client.Keys.BACK_SPACE)
        .pause(2000)
        .keys(client.Keys.ENTER)
        .pause(2000)
        .keys(client.Keys.SUBTRACT)
        .pause(2000)

    },

    "Mouse interaction": (client) =>{
        client
        .mouseButtonClick('right')
        .pause(2000)
        .mouseButtonClick('left')
        .pause(2000)
    }

}