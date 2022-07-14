import {createSlice} from '@reduxjs/toolkit';


const User = createSlice({
    name : "user",
    initialState : { value : {name : '',age : 0 ,email : '',color:''}},
    reducers : {
        login : (state , action) =>{
            state.value = action.payload
        }
    }
})

export const {login} = User.actions
export default User.reducer