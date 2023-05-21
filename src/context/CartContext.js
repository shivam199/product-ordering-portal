import React, { createContext, useContext, useReducer, useState } from "react";

const cartReducer = (state, action)=> {
	switch (action.type) {
		case "UPDATE_DATA": 
			return [...action.payload]
		case "REMOVE_DATA": 
			return [...action.payload]
		case "CLEAR_DATA": 
			return []
		default:
			return state;
	}
};

export const CartContext = createContext(undefined);


export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, []);

	const updateCartData = (data, fromEdit=false) => {
			const cartData = [...state];
			if(fromEdit) {
				cartData.forEach((ele, i) => {
					console.log("fromEdit => ", fromEdit, state?.product?.itemNumber, data?.product?.itemNumber)
					if(ele.product?.itemNumber === data.product?.itemNumber) {
						console.log("inside loop")
						cartData[i].quantity = Number(data.quantity);
						cartData[i].product = data.product;
						dispatch({
							type: "UPDATE_DATA",
							payload: cartData,
						});
						return;
					}
				});
				return;
			}
			if(cartData.some(ele => ele.variant?._id === data.variant?._id)) {
				cartData.forEach((ele, i) => {
					if(ele.variant?._id === data.variant?._id) {
						cartData[i].quantity = Number(data.quantity);
						cartData[i].product = data.product;
						dispatch({
							type: "UPDATE_DATA",
							payload: cartData,
						});
						return;
					}
				});
			} else {
				dispatch({
					type: "UPDATE_DATA",
					payload: [...state,data],
				});
			}
		};
		
		const removeCartData = (data) => {
			const cartData = [...state];
			if(cartData.some(ele => ele.variant?._id === data)) {
				cartData.forEach((ele, i) => {
					if(ele.variant?._id === data) {
						cartData.splice(i, 1);
						dispatch({
							type: "REMOVE_DATA",
							payload: cartData,
						});
						return;
					}
				});
			}
		};

		const clearCart = () => {
			dispatch({
				type: "CLEAR_DATA",
				payload: [],
			});
		}

	return (
		<CartContext.Provider value={{ state, updateCartData, removeCartData, clearCart}}>
			{children}
		</CartContext.Provider>
	);
};

const useCartData = () => {
	const upgradeData = useContext(CartContext);
	if (!upgradeData) {
		throw new Error("useUpgradeData can not be used outside UpgradeProvider");
	}
	return upgradeData;
};

export default useCartData;
