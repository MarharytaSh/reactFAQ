import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class CreateList extends React.Component{
    constructor(props){
       super(props);
       this.haddleClick = this.haddleClick.bind(this);
       this.state = {arr:[]};
    }
    haddleClick(event){
        var GotMark = event.target.getAttribute('mark');
        //console.log(GotMark);
        this.setState(function(currentState, props) {
            var arr = currentState.arr;
                if(currentState.arr.indexOf(GotMark) === -1){
                    arr.push(GotMark);
                }else{
                    arr.splice(currentState.arr.indexOf(GotMark), 1);
                }
            return {
                'arr': arr
            }
        });
    }
    render(){
        return(
            <ul>
                {this.props.FAQ_obj.map((elem, index)=>
                 <li key={index} className="liQuestion"><a href="#" mark={index} onClick={this.haddleClick}> {elem.question} </a>
                    {this.state.arr.indexOf(String(index)) !== -1 ? <span className="spanAnswer">{elem.answer}</span> : ''}
                 </li>
                )}
            </ul>
        );
    }
}

class FAQ extends React.Component {
    render(){
        return (
            <div className="divForFAQ">
                <CreateList FAQ_obj={this.props.FAQ_obj}/>
            </div>);
    }
}

export default FAQ;
