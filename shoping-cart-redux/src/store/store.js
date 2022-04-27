import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartReducer';
import authrSlice from './authReducer';

export default configureStore({
    reducer: {
        auth: authrSlice,
        cart: cartSlice
    }
});