import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    quantity: 0,
    isCartVisible: true,
}

export const addItemToCart = createAsyncThunk('api/addItem', async(item, thunkAPI) => {
    const response = await fetch('/api/add', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })

    return response.json();
})

export const removeItemFromCart = createAsyncThunk('api/removeItem', async(id, thunkAPI) => {
    const response = await fetch('/api/remove/' + id, {
        method: "DELETE"
    })

    return response.json();
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        showCart(state){
            state.isCartVisible = !state.isCartVisible
        }
    },
    extraReducers: (builder) => {
        builder.addCase(addItemToCart.fulfilled, (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find(i => i.id === item.id);
            
            state.quantity++;
            
            if(existingItem){
                existingItem.quantity++;
                existingItem.total += existingItem.price;
            }else{
                state.items.push({...action.payload, quantity: 1, total: action.payload.price});
            }
        }).addCase(removeItemFromCart.fulfilled, (state, action) => {
            const item = state.items.find(i => i.id === +action.payload.id)
            state.quantity--;
            if(item && item.quantity > 1){
                
                item.quantity--;
                item.total -= item.price;
            }else{
                const itemIndex = state.items.findIndex(i => i.id === +action.payload.id) 
                state.items.splice(itemIndex, 1)
            }
        })
    }
})

export const { addItem, removeItem, showCart } = cartSlice.actions;

export default cartSlice.reducer