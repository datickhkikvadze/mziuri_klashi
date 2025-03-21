let productsSweets = [
    {name: 'kinder', price: 2},
    {name: 'Kit-kat', price: 3},
    {name: 'm&ms', price: 4}   
]

let productsDrinks = [
    {name: 'wine', price: 2},
    {name: 'Max-power', price: 3},
    {name: 'Redbull', price: 4}   
]

let productsFruits = [
    {name: 'Apple', price: 1},
    {name: 'Banana', price: 3},
    {name: 'Carrot', price: 4}   
]

let account = {
    name: 'Valera',
    lastname: 'Valerashvili',
    mail: 'valera123@gmail.com',
    balance: 10,
    cart: []
}

function buy(products) {
    console.log(`Your ballance is ${account.balance}`)
    let productsPriceSum = 0

    for (let i = 0; i < products.length; i++) {
        productsPriceSum += products[i].price
    }

    if (account.balance >= productsPriceSum) {
        for (let i = 0; i < products.length; i++) {
            account.cart.push(products[i])
            console.log(`${products[i].name} added to your cart. Price:${products[i].price}`)
        }
        console.log(`${productsPriceSum} Is products Price Sum`)
        account.balance -= productsPriceSum
        console.log(`Your balance is now ${account.balance}`)
        console.log(account.cart)   
    } else {
        console.log("You dont have enough balance")
    }
}

function remove(products) {
    let productsPriceSum = 0

    for (let i = 0; i < products.length; i++) {
        productsPriceSum += products[i].price
    }
        for (let i = 0; i < products.length; i++) {
            account.cart.pop(products[i])
            console.log(`${products[i].name} Removed to your cart.`)
        }
        account.balance += productsPriceSum
        console.log(`Your balance is now ${account.balance}`)
        console.log(account.cart)
}


console.log(buy([productsSweets[1], productsSweets[2]]))
// console.log(remove([productsSweets[1], productsSweets[2]]))
