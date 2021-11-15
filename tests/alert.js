module.exports = {
    "Window Alert": (client) =>{
        client
        .url('https://demoqa.com/alerts')
        .click('#promtButton')
        .getAlertText((result)=>{
            console.log(result.value)
        })
        .setAlertText("Setting Custom Alert Text")
        .acceptAlert()
        .click('#alertButton')
        .dismissAlert()
        .pause(5000)

    }

}