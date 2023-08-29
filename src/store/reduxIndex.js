import { configureStore } from "@reduxjs/toolkit";
// default imports can be renamed as per convenience
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;
