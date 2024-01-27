let data;
function fetchData(){
       setTimeout(()=>{
        data={name:'vaishakh',place:'payyanur'}},2000);
  }
function displayData(){
    console.log(data);
    console.log('ends the program')
     }
    console.log("start here")
    fetchData();
    displayData();