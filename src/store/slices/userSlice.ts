import { createSlice } from "@reduxjs/toolkit";

interface IUserSliceState {
  name: string | null;
  email: string | null;
  password: string | null;
  id: number | null;
}

export interface IUser {
  email: string;
  password: string;
  id: number;
}

const initialState: IUserSliceState = {
  name: null,
  email: null,
  password: null,
  id: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser(state, action) {
      state.name = action.payload;
      state.email = action.payload;
      state.password = action.payload;
      state.id = action.payload;
    },
    // removeUser(state) {
    //   state.email = null;
    //   state.password = null;
    //   state.id = null;
    // },
  },
});

// export const { setUser } = userSlice.actions;
export default userSlice.reducer;
export const { setUser } = userSlice.actions;
