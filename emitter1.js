const EventEmitter=require('events');
var e1= new EventEmitter()
e1.on('myevent1',(name)=>{
    console.log("my name is"  +name);
})
e1.emit('myevent1','vaishakh')