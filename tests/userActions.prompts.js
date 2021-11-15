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

    }
}


/* 

client
        .url("https://www.ultimateqa.com/filling-out-forms", ()=>{
            console.log(JSON.stringify(client.Keys, null, '/t'))

        })

/t"NULL": "",
/t"CANCEL": "",
/t"HELP": "",
/t"BACK_SPACE": "",
/t"TAB": "",
/t"CLEAR": "",
/t"RETURN": "",
/t"ENTER": "",
/t"SHIFT": "",
/t"CONTROL": "",
/t"ALT": "",
/t"PAUSE": "",
/t"ESCAPE": "",
/t"SPACE": "",
/t"PAGEUP": "",
/t"PAGEDOWN": "",
/t"END": "",
/t"HOME": "",
/t"LEFT_ARROW": "",
/t"UP_ARROW": "",
/t"RIGHT_ARROW": "",
/t"DOWN_ARROW": "",
/t"ARROW_LEFT": "",
/t"ARROW_UP": "",
/t"ARROW_RIGHT": "",
/t"ARROW_DOWN": "",
/t"INSERT": "",
/t"DELETE": "",
/t"SEMICOLON": "",
/t"EQUALS": "",
/t"NUMPAD0": "",
/t"NUMPAD1": "",
/t"NUMPAD2": "",
/t"NUMPAD3": "",
/t"NUMPAD4": "",
/t"NUMPAD5": "",
/t"NUMPAD6": "",
/t"NUMPAD7": "",
/t"NUMPAD8": "",
/t"NUMPAD9": "",
/t"MULTIPLY": "",
/t"ADD": "",
/t"SEPARATOR": "",
/t"SUBTRACT": "",
/t"DECIMAL": "",
/t"DIVIDE": "",
/t"F1": "",
/t"F2": "",
/t"F3": "",
/t"F4": "",
/t"F5": "",
/t"F6": "",
/t"F7": "",
/t"F8": "",
/t"F9": "",
/t"F10": "",
/t"F11": "",
/t"F12": "",
/t"COMMAND": "",
/t"META": ""

*/