var fs=require('fs');
var readableStream=fs.createReadStream((__dirname 
 +'/vaishakh1.txt'),{encoding:'utf8'});
 readableStream.on('data',(chunksData)=>{
    console.log("chunk data is...",chunksData);
 })