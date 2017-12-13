import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom';
import { connect } from 'react-redux';


export default function year(state = [], action){
    if(action.type === 'ADD_YEAR'){
        return [...state, action.year];
    }

    return state;
}