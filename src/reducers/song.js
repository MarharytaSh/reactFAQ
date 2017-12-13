import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom';
import { connect } from 'react-redux';


export default function song (state = [], action){
    if(action.type === 'ADD_SONG'){
        return [...state, action.song];
    }
    else if(action.type === 'CLEAR_ALL'){
        console.log('CLEAR_ALL');
        return [];
    }
    else if(action.type === 'DELETE_SONG'){
        console.log('DELETE_SONG');
        console.log(state);

        if(state.indexOf(action.song)!=-1){
            state.splice(state.indexOf(action.song),1);
            console.log(state.indexOf(action.song));
            console.log(state);
            //return state;
            return [...state];
        }
    }
    return state;
}