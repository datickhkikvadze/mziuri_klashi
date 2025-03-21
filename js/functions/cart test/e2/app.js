let names = [
    {name: 'valera', age: 12},
    {name: 'nika', age: 22},
    {name: 'luka', age: 33},
    {name: 'gela', age: 44}   
]

let user = names => {
    let sumAges = 0
    for (let person of names) {
        if (person.age > 18) {
            console.log(`hi my name is ${person.name} and my age is ${person.age}`)
        } else {
            console.log(`he is a child`)
        }
        sumAges += person.age
    }
    console.log('Sum of ages', sumAges)
}

user(names)