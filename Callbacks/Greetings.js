

function formatGreeting(firstname, lastname, formatter) {
    const formattedResult = formatter(firstname, lastname)
    console.log(formattedResult);
}

function formatterCallback (firstname, lastname) {
    return `${firstname} ${lastname}`
}


formatGreeting("umakant", "bhendarkar", formatterCallback)