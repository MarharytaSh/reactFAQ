import React, { Component } from 'react';
import logo from '../logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom';
import { connect } from 'react-redux';



class About extends React.Component {
    constructor(props){
        super(props);
        this.AddYear = this.AddYear.bind(this);
    }
    AddYear(){

        this.props.onAddYear(this.inputYear.value);
    }
    render(){
        return(<div>
                <label>Add year <input type="text" ref={(input)=>{this.inputYear = input; }}/></label>
                <input type="button" value="AddYear" onClick={this.AddYear}/>
                <ul>
                    {this.props.year.map((elem, index)=> <li key={index}>{elem}</li>)}
                </ul>
            </div>
        );
    }
}

export default connect (state=>({
    year: state.year
}), dispatch =>({
    onAddYear: (year)=>{dispatch({type:'ADD_YEAR',  year: year})}
}))(About);










//import React, { Component } from 'react';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
//import { render } from 'react-dom'




/*class About extends React.Component{
    render(){
        return (<div className="About">
                    <h2 className="About">О сайте</h2>
                     <p className="pAbout"><Link to='/'> На главную </Link></p>
                      <Description />
                </div>);
    }
}

class AboutSecond extends React.Component{
    render(){
        return (<div className="About">
                    <h2 className="About">О сайте</h2>
                         <p className="pAbout"><Link to='/'> На главную </Link></p>
                    <WhyWebest />
                    <Nazad />
                 </div>);
    }
}

class Description extends React.Component {
    render (){
        return(
            <div className="DivDescription">
                <ul>
                    <li><Link to="/aboutSecond">Мы лучшие </Link></li>
                    <li><Link to="/aboutSecond">Мы дерзские</Link> </li>
                    <li><Link to="/aboutSecond">Мы крутые</Link> </li>
                </ul>
            </div>
        );
    }
}

class Nazad extends React.Component {
    render(){
        return(
            <Link to="/about"><input type="button" value="Назад"/></Link>
        );
    }
}

class WhyWebest extends React.Component{
    render (){
        return(
            <div>
               <div className="WhyWebest">
                   Потому что мы всегда стараемся делать работу качкственно!
               </div>
            </div>
        );
    }
}

export {About,WhyWebest,AboutSecond};*/
