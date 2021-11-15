const elements = {
    // shorthand definition
    leftFormName: '[id = "et_pb_contact_name_0"]',
    // full definition
    leftFormMessage: {
        selector:   '[id = "et_pb_contact_message_0"]',
        locateStrategy: 'css selector'
    },
    submitBtn: '.et_pb_contact_submit:nth-child(1)',
    lblLeftFormMessage: '.et-pb-contact-message'
};
const commands = [

    {
        /* 
        *   Enters the name and message into the left form fields
        * @param {String} name
        * @param {String} message
        */
        enterNameAndMessage(name, message){ 
            this.setValue('@leftFormName', name)
            this.setValue('@leftFormMessage', message)
            this.pause(5000)
        }
    },
    {
        submitLeftForm(){
            this.click('@submitBtn')
            this.pause(10000)
        }
        
    }

];


module.exports = {

    elements: elements,
    commands: commands,
    url: function(){
        return `${this.api.launch_url}/filling-out-forms/`
    },

    sections:   {
        rightForm:{
            selector:  '#et_pb_contact_form_1', // parent form id
            elements: {
                txtName: '#et_pb_contact_name_1',
                txtMessage: '#et_pb_contact_message_1',
                btnSubmit: 'button' // this is the only button in the right form therefore we simply write it as button

            },
            commands:[
                {
                    enterName(name){
                        return this.setValue('@txtName')
                    }
                }
            ]
        }
    }


}