import { createSlice } from '@reduxjs/toolkit';

// Initial State
const initialState = {
  number: 0
};

// 객체{ 이름, 초기값, reducers }
const countSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },
    removeNumber: (state, action) => {
      state.number = state.number - action.payload;
    }
  }
});

// action creator
// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { addNumber, removeNumber } = countSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default
export default countSlice.reducer;
