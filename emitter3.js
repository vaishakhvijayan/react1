const EventEmitter=require('events')
var e1=new EventEmitter()
    setImmediate(()=>{
        e1.emit('myevent1')
    })
    e1.on('myevent1',()=>{
        console.log("running1")
    })
    e1.on('myevent1',()=>{
        console.log("running2")
    })
    e1.on('myevent1',()=>{
        console.log("running3")
    })
