const app = new Vue({
    el: "#root",
    data: {

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10 AM',
                        message: 'Mario',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '28/03/2020 10:20 AM',
                        message: 'Gaetano?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '28/03/2020 16:15 PM',
                        message: 'Ah scusa!',
                        status: 'received',
                        menu: false
                    }
                ],
            },
            {
                name: 'Matteo',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30 PM',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '20/03/2020 16:30 PM',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '20/03/2020 16:35 PM',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received',
                        menu: false
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10 AM',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '28/03/2020 10:20 AM',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: dayjs().format('28/03/2020 16:15 A'),
                        message: 'Ah scusa!',
                        status: 'received',
                        menu: false
                    }
                ],
            },

            {
                name: 'Monica',
                avatar: '_io',
                visible: true,
                messages: [{
                        date: dayjs().format('28/03/2020 10:10 A'),
                        message: 'Bi voglio una papera',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: dayjs().format('28/03/2020 10:20 A'),
                        message: 'Te la compro per natale',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: dayjs().format('28/03/2020 10:22 A'),
                        message: 'siiiiii',
                        status: 'received',
                        menu: false
                    }
                ],
            },
           
        ],


     
        currentUser: 0,
        
        sent: 'sent',
        received: "received",
        messageContent: null,
        activeChat: '',
        searchUtente: '',
        none: 'none',
        lastAccess: 'Ultimo acesso', 
        transform: 'transform',
        rotate:'rotate',
        microfono:false,
        intro:true,
        blue:'blue'
       

    
        

    },




    methods: {
        active: function (index) {
                this.currentUser = index;
        },
        addMessage: function (current,index) {
            if (this.messageContent != '') {
                this.contacts[current].messages.push({
                    message: this.messageContent,
                    status: 'sent',
                    menu: false,
                    date: dayjs().format('DD/MM/YYYY HH:mm A'),
                }),
               this.answer()
            }
            this.messageContent = '';
        },

        addAnswer: function (index) {
            console.log()
            this.contacts[this.currentUser].messages.push({
                message: 'ok',
                status: 'received',
                menu: false,
                date: dayjs().format('DD/MM/YYYY HH:mm A'),
            })
            this.lastAccess = 'Ultimo accesso ' + dayjs().format('DD/MM/YYYY HH:mm A') 
            this.myFunction()
        },

        answer: function () {
            setTimeout(() => {
                this.addAnswer();
            }, 1000);
        },

        filter: function () {
            if (this.searchUtente != '') {

                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(this.searchUtente.toLowerCase())) {
                        element.visible = true;
                    } else if (element.name.toLowerCase().includes(this.searchUtente == '')) {
                        element.visible = true;
                    }else{
                        element.visible = false
                    }
                });
            }
        },

        dropDown:function(index){
            
            if (this.contacts[this.currentUser].messages[index].menu == false) {
                this.contacts[this.currentUser].messages[index].menu = true
            }else{
              this.contacts[this.currentUser].messages[index].menu = false;
            }
        },
        
        closeDrop:function(){
            if (this.contacts.messages.menu == true) {
                this.contacts.messages.menu = false
        }},

        deleteMsg: function(current,index){
          this.contacts[current].messages.splice(index,1)
        },

        mic:function(){
            if(this.messageContent != 0){
                this.microfono = true

            }else{
                this.microfono = false
            }
            
        },

        introPage:function(){
            if(this.intro == true){
                this.intro = false
                this.activeChat = 'active-chat'
            }
        },

       lastMessage: function (index) {
           const last = this.contacts[index].messages.length - 1;
           return this.contacts[index].messages[last].message;
       },

         lastDate: function (index) {
             const last = this.contacts[index].messages.length - 1;
             return this.contacts[index].messages[last].date;
         }
                           
       
        
    },


 


})

