import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import {ProductContext} from './contexts/ProductContext.js';
import {CartContext} from './contexts/CartContext.js';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


const initialState = data;

function App() {
	const [products] = useState(initialState); ///tracks all available products
	const [cart, setCart] = useState([]);  ///track all items in cart

	const addItem = item => {
		// add the given item to the cart
		setCart(item)
		
	};

	return (
		
		<ProductContext.Provider value={{ products, addItem}}>
			<CartContext.Provider value={{cart}}>

				<div className="App">
					<Navigation cart={cart} />  

					{/* Routes */}
					
					<Route exact path="/">
						<Products />
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</div>

			</CartContext.Provider>
		</ProductContext.Provider>
	);
}

export default App;
