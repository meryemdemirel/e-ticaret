import { createSlice } from "@reduxjs/toolkit";
//images Path
// import { images } from "../imagesPaths/shoesImages";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const storeInLocalStorage = (data) => {
  localStorage.setItem('cart', JSON.stringify(data))
}

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
  isLoading: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemCart = state.carts.find(item => item.id === action.payload.id)
      if (isItemCart) {
        console.log('else degilsin');
        const tempCart = state.carts.map(item => {
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + 1;
            let tempTotalPrice = tempQty + item.price;
            console.log('logla bakim',
            {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice
            });
            return {
              ...item,
              quantity: tempQty,
              totalPrice: tempTotalPrice
            }
          } else {
            return item
          }
        })
        console.log('onceki state.carts',state.carts);
        state.carts = tempCart
        console.log('sonraki state.carts',state.carts);

        storeInLocalStorage(state.carts)
      } else {
        console.log('elsetemisin');
        action.payload.quantity++
        state.carts.push(action.payload)
        storeInLocalStorage(state.carts)
      }

    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter(item => item.id !== action.payload)
      state.carts = tempCart
      storeInLocalStorage(state.carts)

    },
    clearCart: (state, action) => {
      state.carts = []
      storeInLocalStorage(state.carts)
    },
    getCartTotal: (state) => {
      
      // Array.isArray(state.carts) 
      // ?
      console.log('sstate.kartlarrssss',state.carts); 
      state.totalAmount =
      state.carts.reduce((cartTotal, cartItem) => {
        return cartTotal += cartItem.price * cartItem.quantity
      }, 0)
      // : 0;
      state.itemCount = state.carts.length
    }

    // inCart: (state, action) => {
    //   let find = state.carts?.findIndex((item) => item.id === action.payload.id);
    //   if(find>=0){
    //     return true
    //   }else{
    //     return false
    //   }
    // }






    // ADD: (state, action) => {
    //   //this if condition will run 8 times because there are 9 product in it then it will go to else when it will find id which is === palyoad
    //   return state.map((product) => {
    //     if (product.id !== action.payload.id) {
    //       return product;
    //     } else
    //       return {
    //         ...product,
    //         added: true,
    //       };
    //   });
    // },
    // REMOVE: (state, action) => {
    //   return state.map((product) => {
    //     //this if condition will run 8 times because there are 9 product in it then it will go to else when it will find id which is === palyoad
    //     if (product.id !== action.payload) {
    //       return product;
    //     } else {
    //       return {
    //         ...product,
    //         added: false,
    //       };
    //     }
    //   });
    // },
    // INCREMENT: (state, action) => {
    //   return state.map((product) => {
    //     if (product.id !== action.payload) {
    //       return product;
    //     } else {
    //       return {
    //         ...product,
    //         count: product.count + 1,
    //       };
    //     }
    //   });
    // },
    // DECREMENT: (state, action) => {
    //   return state.map((product) => {
    //     if (product.id !== action.payload) {
    //       return product;
    //     } else {
    //       return {
    //         ...product,
    //         count: product.count - 1,
    //       };
    //     }
    //   });
    // },
  },
});

export const { addToCart, clearCart, getCartTotal, removeFromCart } = cartSlice.actions

export default cartSlice.reducer;
