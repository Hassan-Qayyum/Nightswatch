module.exports = {

    "should navigate by default ": (client)=>{
    
    client.init()
    .pause(2000)
    .getTitle((title)=> console.log(title))
    .url('https://www.ultimateqa.com/filling-out-forms')
    .getTitle((title)=> console.log (title))
    .back()
    .getTitle((title)=>console.log(title))
    .forward()
    .getTitle((title)=> console.log(title))
    .urlHash('#random')
    
    }
}
    