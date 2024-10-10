let notifications =['Notification 1','notification 2','notification 3'];

function processNotification(){
    if (notifications.length === 0){
        console.log("No more notification to process.");
        return;
    }
    let notification = notifications.shift();
console.log('Processed :',notification);
console.log('Remaining notification : ',notifications)
}
processNotification();
processNotification();
processNotification();
processNotification();
