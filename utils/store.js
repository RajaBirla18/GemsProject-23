import rootReducer from "@/reducers";
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const persistConfig = {
  key: "raja2",
  storage,
  whitelist: ["users", "SumRedu"],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = (context) => {

let myStore = null;

myStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
  });

  myStore.__persistor = persistStore(myStore);

  return myStore;
}

export const wrapper = createWrapper(makeStore, { debug: true });