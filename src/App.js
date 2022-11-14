import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes,Route} from "react-router";
import Display from './Front';
import AddFront from './Front/AddScreen';
import EditFront from './Front/EditScreen';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import frontReducer from './Front/reducer/front-reducer';

function App() {
  const store = configureStore({reducer: {a: frontReducer}});
  return (
    <Provider store={store}>
   <BrowserRouter>
   <Routes>
    <Route path="/*" element={<Display/>}/>
    <Route path="/add" element={<AddFront/>}/>
    <Route path="/edit/:ID" element={<EditFront/>}/>
   </Routes>
   </BrowserRouter>
   </Provider>
  );
}

export default App;
