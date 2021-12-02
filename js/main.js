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
                name: 'Monica',
                avatar: '_io',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'fanno i croquette buoni?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'sicuramente no peró proviamo',
                        status: 'sent'
                    }
                ],
            },
        ],

        

       currentUser:0,
       sent:'sent',
       received: "received",
       messageContent:null,
       activeChat:'activeChat',
       searchUtente:'',
       none:'none',
       lastAccess: 'Ultimo acesso'

    },

   mounted: function () {
       this.lastSeen();

   },

    
   

    methods:{
        active: function(index){
            this.currentUser = index;
        },


        addMessage: function (current) {
            console.log(this.messageContent
                )
                if (this.messageContent != ''){
                    this.contacts[current].messages.push({
                        message:this.messageContent,
                        status:'sent',
                        date: dayjs().format('DD/MM/YYYY,HH,mm,ss'),
                    })
                    this.answer()
                }
            this.messageContent = '';
        },
         addAnswer: function () {
             console.log()
             this.contacts[this.currentUser].messages.push({
                 message: 'ok',
                 status: 'received',
                 date: dayjs().format('DD/MM/YYYY,HH,mm,ss'),
             })
             this.lastAccess = 'Ultimo accesso '+ dayjs().format('DD/MM/YYYY HH:mmss')
         },

         answer: function () {
             setTimeout(() => {
                 this.addAnswer();
             }, 1000);
         },
       

    
        filter: function() {
            if(this.searchUtente != ''){

                this.contacts.forEach(element  => {
                    if(element.name.includes(this.searchUtente)){
                        element.visible = true; 
                        console.log(element.visible)
                    }else{
                        element.visible = false;
                        console.log(element.visible)     
                    }
                    
                    
                });
            }
        },  

      
          lastSeen: function () {
              this.contacts[this.currentUser].messages.forEach(element => {
                  if (element.status == 'received'){
                      this.lastAccess ='last seen'+ ' ' + element.date
                  }
              });
          },

        
    }



    
})

