import { createSlice } from "@reduxjs/toolkit";
import listArray from "../ListScreen/list.json";
const EmployeeReducer = createSlice({
    name: "listArray",
    initialState: listArray,
    reducers: {
      addReducer(state, action) {
        console.log(action.payload)
        state.push({
          ...action.payload,
        });
      },
      editReducer(state, action) {
        return state.map((data) => {
          if (data.id === action.payload.id) {
            return { ...data, ...action.payload };
          } else {
            return data;
          }
        });
      },
  
      deleteReducer(state, action) {
        return state.filter((data) => {
          return data.id !== action.payload.id
        });
      },
    },
  });

    export const { addReducer ,editReducer,deleteReducer} = EmployeeReducer.actions;
    export default EmployeeReducer.reducer;
