import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "redux";
import rootReducer from './reducer';



const store = configureStore({
    reducer: rootReducer
  });


  export default store;