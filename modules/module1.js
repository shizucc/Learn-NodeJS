const greeting = (name) => {
    return `Hello my name is ${name}`
}
const PI = 3.14

const data = {
    name : "Kokomi",
    age : 16,
    introduction(){
        return `Im ${this.name} and ${this.age} old`
    }
}

class MyClass {
    constructor(){
        return `Class has been created`
    }
}

module.exports = {greeting,PI,data, MyClass}