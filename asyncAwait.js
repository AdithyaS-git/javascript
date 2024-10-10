function fetchData(){
    console.log('Fetching data....');
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const data ={id :3,name:'Alice'};
            console.log('Data Fetched:',data)
            resolve(data);

        },2000)
    });
}

function processData(data){
    console.log('Processing data : ',data)
}

async function runApp(){
    try{
        const data =await fetchData();
processData(data);
    }catch(error){
console.log('Error fetching data :',error)
    }
}
runApp();

async function runApp2(){
    try {
        const data1 =await fetchData()
        processData(data1);

        const data2 =await fetchData();
        processData(data2);
    } catch (error) {
        console.log('Error fetching data :',error) 
    }
}

//runApp2();

async function runApp3(){
    try{
        const[data1,data2]=await Promise.all([fetchData(),fetchData()]);
processData(data1);
processData(data2)
    }catch(error){
        console.log('Error fetching data :',error)
    }
}
runApp3();