// with the development of the app, the number of classes increases, so the connection
// between them becomes more and more complicated.
// The Mediator pattern helps classes communicate with each other through
// an mediator object

// supose we create a chat. members can join certain chat rooms by registering in them.
// they can also send messages to each other. the chat object in such app will act as a mediator.
// the member only sends the message and the chat room handles its routing

class Participant {
    constructor(name) {
      this.name = name;
      this.chatroom = null;
    }
   
    send(message, to) {
      this.chatroom.send(message, this, to);
    }
   
    receive(message, from) {
      log.add(from.name + " to " + this.name + ": " + message);
    }
  }
   
  let Chatroom = function() {
    let participants = {};
   
    return { 
      register: function(participant) {
        participants[participant.name] = participant;
        participant.chatroom = this;
      },
    
      send: function(message, from, to) {
        if (to) {                
          to.receive(message, from);    
        } else {                      
          for (let key in participants) {   
            if (participants[key] !== from) {
              participants[key].receive(message, from);
            }
          }
        }
      }
    };
  };
log = (function() {
    let log = '';

    return {
        add: msg => {log += msg + '\n';},
        show: () => {console.log(log); log = '';}
    }
})();


    function run() {
        let yoko = new Participant('Yoko'),
            john = new Participant('John'),
            paul = new Participant('Paul'),
            ringo = new Participant('Ringo');
            chatroom = new Chatroom(),
       
        chatroom.register(yoko);
        chatroom.register(john);
        chatroom.register(paul);
        chatroom.register(ringo);
       
        yoko.send('All you need is ...');
        yoko.send('I need a car.');
        john.send('Hey, no need to broadcast', yoko);
        paul.send('Ha, I heard that!');
        ringo.send('Paul, what do you think?', paul);
       
        log.show();
      }

run();