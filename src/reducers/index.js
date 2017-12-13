import { combineReducers } from 'redux';
import song from './song';
import year from './years';


export default combineReducers ({
    song,
    year
});