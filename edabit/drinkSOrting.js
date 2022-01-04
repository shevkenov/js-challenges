function sortDrinkByPrice(drinks) {
	return drinks.sort((a,b) => a.price - b.price);
}

const drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
]

const a = sortDrinkByPrice(drinks)
console.log(a) // [{name: "lime", price: 10}, {name: "lemonade", price: 50}]