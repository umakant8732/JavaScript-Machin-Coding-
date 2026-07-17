function runTask(taskName, callBack) {
    console.log(`Running Task : ${taskName}`); 
    callBack()
}

function callBackFunction(){
    console.log("Task completed successfully!");
}

runTask('clean shoes', callBackFunction);
