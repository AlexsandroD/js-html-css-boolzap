const app = new Vue({
    el:"#root",
    data:{
         
        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [{
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [{
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_6',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        

       currentUser:0,
       sent:'sent',
       received: "received",
       messageContent:null

    },
   

    methods:{
        active: function(index){
            this.currentUser = index;
        },
        addMessage: function (current) {
            console.log(this.messageContent
                )
            this.contacts[current].messages.push({
                message:this.messageContent,
                status:'sent',
                date: '10/01/2020 15:50:00',
            })
            this.messageContent = '';

            
            answer()

        },
        addAnswer: function(){
            console.log()
             this.contacts[current].messages.push({
                 message: 'ok',
                 status: 'received',
                 date: '10/01/2020 15:50:00',
             })
        },

           answer: function () {

               let self = this;
               this.timer = setInterval(function () {
                   self.addAnswer(this.contacts[current].messages.message);
               }, 1000);
               console.log()
           },
        
     
    }

    
})

