import { createContext } from 'react';
import data from '../data.js';

const initialState = data;

//create context
export const ProductContext = createContext(initialState);



