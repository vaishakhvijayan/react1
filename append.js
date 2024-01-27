var fs= require('fs');
fs.appendFile('vaishakh1.txt','welcome to mern stack',function(err){
if (err) throw err;
console.log('appended');
});