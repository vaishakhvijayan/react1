//import events
const EventEmitter=require('events')
//initialisation
var e1=new EventEmitter()
//register to our event with event name myEvent
e1.on('myEvent',()=>{
    console.log('hai event trigered');
})
e1.emit('myEvent');