const app = new Vue({
    el: "#root",
    data: {

        contacts: [{
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [{
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
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
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '20/03/2020 16:35:00',
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
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        menu: false
                    },
                    {
                        date: '28/03/2020 16:15:22',
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
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        menu:false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'fanno i croquette buoni?',
                        status: 'received',
                        menu: false
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'sicuramente no peró proviamo',
                        status: 'sent',
                        menu: false
                    }
                ],
            },
        ],


     
        currentUser: 0,
        lastMessage:null,
        sent: 'sent',
        received: "received",
        messageContent: null,
        activeChat: 'activeChat',
        searchUtente: '',
        none: 'none',
        lastAccess: 'Ultimo acesso', 
        transform: 'transform',
        rotate:'rotate',
        microfono:false
            
        

    },

    mounted: function () {
        this.lastSeen();
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
                    date: dayjs().format('DD/MM/YYYY,HH,mm,ss'),
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
                date: dayjs().format('DD/MM/YYYY,HH,mm,ss'),
            })
            this.lastAccess = 'Ultimo accesso ' + dayjs().format('DD/MM/YYYY HH:mmss')
            
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
                    } else {
                        element.visible = false;
                    }


                });
            }
        },


        lastSeen: function (index) {
            this.contacts[this.currentUser].messages.forEach(element => {
                if (element.status == 'received') {
                    this.lastAccess = 'last seen' + ' ' + element.date
                }
            });
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
           
       }
       
    },


 


})

