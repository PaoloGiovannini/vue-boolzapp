const DateTime = luxon.DateTime;

const { createApp } = Vue

createApp({
  data() {
    return {
        
        searchContact: '',
        newMessage: '',
        selectedContact: 0,
        contacts: [
            {
            name: 'Michele',
            avatar: 'img/avatar_1.jpg',
            visible: true,
            messages: [
            {
            actualDate: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: 'img/avatar_2.jpg',
            visible: true,
            messages: [
            {
            actualDate: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
            },
            {
            actualDate: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
            },
            {
            actualDate: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: 'img/avatar_3.jpg',
            visible: true,
            messages: [
            {
            actualDate: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },
            {
            actualDate: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },
            {
            actualDate: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: 'img/avatar_4.jpg',
            visible: true,
            messages: [
            {
            actualDate: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: 'img/avatar_5.jpg',
            visible: true,
            messages: [
            {
            actualDate: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'received'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: 'img/avatar_6.jpg',
            visible: true,
            messages: [
            {
            actualDate: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'received'
            },
            {
            actualDate: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'sent'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: 'img/avatar_7.jpg',
            visible: true,
            messages: [
            {
            actualDate: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'received'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: 'img/avatar_8.jpg',
            visible: true,
            messages: [
            {
            actualDate: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'received'
            },
            {
            actualDate: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'sent'
            },
            {
            actualDate: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'received'
            }
            ],
            }
            ]
    }
  },
  methods:{
    selectContact(index){  
        this.selectedContact = index;
    },
    sendNewMessage(index){
        if(this.newMessage != ''){
            this.contacts[index].messages.push({message: this.newMessage, status: 'sent', actualDate: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)});        
            this.newMessage='';
            this.receivedMessage(index);
        }
    },
    receivedMessage(index){
      setTimeout(() =>{
        this.contacts[index].messages.push({message: 'Ok!', status: 'received', actualDate: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT_WITH_SECONDS)});
      }, 1000);
    },
    removeMessage(index) {
      this.contacts[this.selectedContact].messages.splice(index, 1);                      
      },
  }
}).mount('#app')