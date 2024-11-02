import { configureStore, createSlice } from "@reduxjs/toolkit";
import Cart from "./Cart";

// Create a slice for products
const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: 'Tomato', price: 200.30 },
            { name: 'Potato', price: 150.67 },
            { name: 'Onion', price: 175.89 },
            { name: 'Capsicum', price: 239.87 }
        ],
        nonVeg: [
            { name: 'Chicken', price: 400.82 },
            { name: 'Fish', price: 500.90 },
            { name: 'Prawns', price: 550.60 },
            { name: 'Pulasa', price: 1500.00 }
        ]
    },
    reducers: {} // Changed 'reducer' to 'reducers'
});

const cartSlice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status = state.find(item=>item.name===action.payload.name);
            if(status){
                status.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1})
            }

        },

        
        increament: (state, action) => {
            const status = state.find(item => item.name === action.payload.name);
            if (status) {
                status.quantity += 1;
            }
       },
       decreament: (state, action) => {
        const item = state.find(item => item.name === action.payload.name);
        if (item.quantity>1) {
            item.quantity -= 1;
        }
        else{
            return state.filter(item => item.name !== action.payload.name);
        }
   },

       remove: (state, action) => {
        
            return state.filter(item => item.name !== action.payload.name)
           
     }

    

        
}

    
});
export const {addToCart,increament,decreament,remove} = cartSlice.actions;

// Configure the store with the products reducer
const store = configureStore({
    reducer: {
        products: productSlice.reducer, // Using the productSlice's reducer
        cart : cartSlice.reducer // Using the  cartSlice's reducer
    }
});

export default store; // Export the store
