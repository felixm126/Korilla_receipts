import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Receipts from './components/Receipts.jsx'

function App() {
	const receipts = [
		{
			id: 1,
			person: 'Jeremy',
			order: {
				main: 'Burrito',
				protein: 'Skirt Steak',
				rice: 'Purple Rice',
				sauce: 'Green Crack',
				toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
				drink: 'Thai Iced Tea',
				cost: 22,
			},
			paid: false,
		},
		{
			id: 2,
			person: 'Brittany',
			order: {
				main: 'Rice Bowl',
				protein: 'Ginger Chicken',
				rice: 'Sticky Rice',
				sauce: 'Korilla',
				toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
				drink: 'Korchata',
				cost: 19,
			},
			paid: false,
		},
		{
			id: 3,
			person: 'Tom',
			order: {
				main: 'Salad Bowl',
				protein: 'Organic Tofu',
				rice: 'none',
				sauce: "K'lla",
				toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
				drink: 'Sparkling Blood Orange Soda',
				cost: 20,
			},
			paid: true,
		},
		{
			id: 4,
			person: 'Jessica',
			order: {
				main: 'Burrito Bowl',
				protein: 'Carnitas',
				rice: 'yellow rice',
				sauce: 'Jalapeno Honey',
				toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
				drink: 'Pineapple Jarritos',
				cost: 23,
			},
			paid: true,
		},
	]

	// set an empty array that will be passed into the receipts key
	let filteredReceipts = []

	// set bang op to true
	const isPaid = true

	// filter through receipts to check if paid -> display if paid
	if (isPaid) {
		filteredReceipts = receipts.filter((receipt) => receipt.paid === true)
	} else {
		filteredReceipts = receipts.filter((receipt) => receipt.paid === false)
	}

	return (
		<div>
			<Header />
			{/* Each container will populate due to receipts component, do not add multiple times */}
			<Receipts receipts={filteredReceipts} />
		</div>
	)
}
export default App
