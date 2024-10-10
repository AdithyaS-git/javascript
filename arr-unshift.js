let taskList=["Check mails" ,"Prepare reports","Attend meeting"];

function addTask(task){
    taskList.unshift( "Task Added :" , task)
    console.log("Updated list :",taskList);

}
addTask("Review Code");

function completeTask(){
    if (taskList.length ===0){
        console.log("No tasks to complete");
        return;
    }
}
let completedTask =taskList.shift();
console.log('Completed task : ',completedTask);
console.log("Remaining tasks : ",taskList)

completeTask();