var fs= require('fs');
fs.writeFile('vaishakh1.txt','welcome vaishakh\n',
function(err){
    if (err) throw err;
    console.log('writed');
});