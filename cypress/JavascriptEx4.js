const productPrices = [100, 45, 30, 75, 50, 20, 10, 60];

// Apply a 10% discount to all prices
const discountedPrices = productPrices.map(price => price * 0.9);
const taxinducedprices = productPrices.map(price => price + 20);

// Filter products priced below $50
const affordableProducts = discountedPrices.filter(price => price < 50);
const taxaddedprices = taxinducedprices.filter(price => price > 50);

// Calculate the total cost of all items in the affordableProducts array
const totalCost = affordableProducts.reduce((total, price) => total + price, 0);

console.log('Discounted Prices:', discountedPrices);
console.log('Tax Induced Prices:', taxinducedprices);
console.log('Affordable Products:', affordableProducts);
console.log('Tax Added Prices:', taxaddedprices);
console.log('Total Cost of Affordable Products:', totalCost);