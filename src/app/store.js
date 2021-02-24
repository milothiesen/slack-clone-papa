import { configureStore } from '@reduxjs/toolkit';
import appReducer from '../features/appSlice';

// for this demo we are making 'app reducer' a global store, but in production this would be spread out to different parts of the app. For example, user, cart, etc∑

export default configureStore({
    reducer: {
        app: appReducer,
    },
});
