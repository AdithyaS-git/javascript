function fetchData(){
    console.log('Fetching data...');

    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            const data ={
                id :2,name:'Bob'
            };
            console.log('Data fetched :',data);
            resolve(data);
        },2000)
    });
}

function processData(data){
    console.log('Processing data',data);
}

fetchData()
.then(processData)
.catch((error) => console.log('Error fetching data : ',error));