//will be utilized by Shopping Cart an Navigation components
import {createContext} from 'react';
import data from '../data.js';

const initialState = data;


//create new context
export const CartContext = createContext(initialState);


