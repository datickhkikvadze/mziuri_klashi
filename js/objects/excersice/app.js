let cart = ['xinkali', 'valeriani', 'dzexvi']
let products = ['xinkali', 'valeriani', 'dzexvi', 'gvino']

if (!cart.includes('gvino') || !cart.includes('dzexvi') || !cart.includes('valeriani') || !cart.includes('xinkali')) {
    cart.splice(0, cart.length);
    cart.push(products)
}

let cartObject = {
    cart: cart.join(',')
};

console.log(cartObject)
