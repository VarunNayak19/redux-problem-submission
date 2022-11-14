import { createSlice } from "@reduxjs/toolkit";
// import { UsersData } from "./fakeData";
export const userSlice = createSlice({
    name: "users",
    initialState: { value: [] },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
            localStorage.setItem("userData", JSON.stringify(state.value))

        },
        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id)
            localStorage.setItem("userData", JSON.stringify(state.value))
        }
    }
})

export default userSlice.reducer
export const { addUser } = userSlice.actions;
export const { deleteUser } = userSlice.actions