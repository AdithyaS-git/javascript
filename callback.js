function fetchData(callback){
    console.log("Fetch data...");
    //Starting of fetching data
    setTimeout(()=>
    {
        const data = {
            id:1,name:'Alice'
        };
        console.log("Data fetched : ",data);
        callback(data);
    },2000);
}

function processData(data){
    console.log('Processing data: ',data);
}

fetchData(processData);