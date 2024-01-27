const EventEmitter=require('events')
var e1=new EventEmitter()
e1.on('myevent1',(a,b)=>{
    let result=a+b;
    console.log(`hai result of ${a}+${b}=${result}`)
})
e1.emit('myevent1',10,20)