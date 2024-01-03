import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.findIndex(i => i.id === newItem.id);
            if (existingItem === -1) {
                state.push({
                    ...newItem,
                    quantity: 1
                })
            }
            else {
                state[existingItem].quantity++;
            }
        },
        removeFromCart(state, action) {
            const id = action.payload;
            const itemIndex = state.findIndex(i => i.id === id);
            state.splice(itemIndex, 1);
        },
        incrementItem(state, action) {
            const id = action.payload
            const itemIndex = state.findIndex(i => i.id === id);
            state[itemIndex].quantity++;
        },
        decrementItem(state, action) {
            const id = action.payload
            const itemIndex = state.findIndex(i => i.id === id);
            if (state[itemIndex].quantity === 1) {
                state.splice(itemIndex, 1);
            }
            else {
                state[itemIndex].quantity--;
            }
        }
    }
 });

 const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        addToFav(state, action){
            const item = action.payload;
            state.push(item);
        },
        removeFromFav(state, action){
            const id = action.payload;
            state.splice(state.findIndex(i => i.id === id), 1);
        },
    }
 })

 const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthorized: true,
    },
    reducers: {
        setAuthorize(state) {
            state.isAuthorized = true;
        },
        unsetAuthorize(state) {
            state.isAuthorized = false;
        }
    }
 })

 const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        favorites: favoritesSlice.reducer,
        auth: authSlice.reducer,
    }
 })

 export const cartActions = cartSlice.actions;
 export const favoriteActions = favoritesSlice.actions;
 export const authActions = authSlice.actions;

 export default store;