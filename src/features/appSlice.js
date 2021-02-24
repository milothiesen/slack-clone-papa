import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        // inital state of the global store
        roomId: null,
    },
    // the reducers are the 'actions' in the app. in this case we are entering different chat rooms in the slack clone app
    reducers: {
        enterRoom: (state, action) => {
            state.roomId = action.payload.roomId;
        },
    },
});

// here we are destructuring the reducers and exporting them for use in the app globally
export const { enterRoom } = appSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
