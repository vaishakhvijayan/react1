let data;
function fetchData(cb){
    setTimeout(()=>{
        data={name:'vaishakh',place:'payyanur'};cb();
    },2000);
   }
console.log("start here")
fetchData(function(){
    console.log(data);
    console.log("ends the program")
});