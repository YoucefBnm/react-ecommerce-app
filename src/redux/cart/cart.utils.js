export const addItemToCart = (cartItems, newCartItem) => {
    // if cart item is true 
    const existingItem = cartItems.find(
        cartItem => cartItem.id === newCartItem.id 
    )

    if(existingItem) {
        return cartItems.map(cartItem => 
            cartItem.id === newCartItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }
    // quantity prop gets attached the first time 
    //  around since 'if' won't run when adding new item 
    return [ ...cartItems, { ...newCartItem, quantity: 1}]
}