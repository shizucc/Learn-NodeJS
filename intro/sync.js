const getUser = (id) => {
    const user = id === 1 ? "Kokomi" : "Sangonomiya";
    return {id, user}
}


const user1 = getUser(1)
console.log(user1)

const user2 = getUser(2)
console.log(user2)

console.log("Hello world!")
