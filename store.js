import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoSlice from "./slices/todoSlice";

const persistConfig = {
  key: "persist-key",
  storage,
  blacklist: ["creatorInfo"],
};
export const rootReducer = combineReducers({
  todo: todoSlice,
});
export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
