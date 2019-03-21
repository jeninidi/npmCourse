const name = 'Andrew'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'Philadelphia'
}
//or
const user = {
    name,
    age: userAge
}
console.log(user)

//ex2
const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const label = product.label
const stock = product.stock
//or
const{productLabel, stock, rating = 5} = product
console.log(rating)
console.log(productLabel)
console.log(stock)

const transactoin = (type, {label, stock}) => {
    console.log(type, label, stock)
}