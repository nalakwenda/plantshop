import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from './slices/RootReducer'
import { api } from './apis/services';

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducer)



const store = configureStore({
    reducer: persistedReducer,

    // [onboardingApi.reducerPath]: onboardingApi.reducerPath,

    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware().concat(onboardingApi.middleware),
   

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,  
        }).concat(api.middleware),
});
const persistor = persistStore(store)
 
// setupListeners(store.dispatch);
export { persistor, store }
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
