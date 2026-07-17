
function fetchData(data, callback) {
    if (typeof callback !== "function") {
        console.log("Default fallback log: " + data)
        return
    }

    callback(data)

}

function callBackFunction (data) {
    console.log(data);
}


fetchData("super secreate message")
fetchData("super secret message", callBackFunction)





