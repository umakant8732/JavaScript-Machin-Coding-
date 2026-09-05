


async function fetchApi() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await response.json()
        return data
    } catch (error) {
        console.log("Something went wrong", error.message);
    }
}

const result = await fetchApi()
console.log(result);