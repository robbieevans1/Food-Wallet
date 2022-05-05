import React from "react";
import Cart from "../components/Cart";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";

const Merch = () => {
	return (
		<div>
			<ProductItem />
			<ProductList />
			<Cart />
		</div>
	);
};

export default Merch;
