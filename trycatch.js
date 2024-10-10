//parse a json string

function parseJSON(jsonString){
    try{
        const parsedData =JSON.parse(jsonString);
        return parsedData;
    }catch(error){
        console.error("An error occured : ",error.message);
        return null;
    }
}

const validJSON ='{"name ":"John","age":30}';
const invalidJSON ='{"name ":"Jo","age":}';

const result1 =parseJSON(validJSON);
const result2 =parseJSON(invalidJSON)

console.log("result 1 :",result1)
console.log("result2 : ",result2)