const getUser = (id,cb) => {
    const time = id === 1 ? 500 : 300
    setTimeout(() => {
        const name = id === 1 ? "Kokomi" : "Sangonomiya"
        cb({id, name})
    },time)
}

const user1 = getUser(1, (result) => {
    console.log(result)
})

const user2 = getUser(2, (result) => {
    console.log(result)
})

console.log("Hello World!")