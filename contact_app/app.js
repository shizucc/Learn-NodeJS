const { makeQuestion,saveContact } = require('./contacts')

async function main() { 
    const name = await makeQuestion('Whats your name? ')
    const email = await makeQuestion('Whats your email? ')
    const years = await makeQuestion('How old are you? ')

    saveContact(name, email, years)
}

main()