import React from "react";
import { createSlice, legacy_createStore } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
            state.push(action.payload)
            console.log(action.payload)
        },
        removeUser(state,action){},
        deleteAllUsers(state,action){},
    }
})

console.log(userSlice.actions)

export default userSlice.reducer
export const {addUser}=userSlice.actions