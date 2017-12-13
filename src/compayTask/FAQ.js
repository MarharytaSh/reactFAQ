import React, { Component } from 'react';
import { render } from 'react-dom';
import './index.css';

class MakeQuestionAnswer extends React.Component{
    constructor(props){
        super(props);
        this.handlerClick = this.handlerClick.bind(this);
        this.state = {
            ext:false
        };
    }
    componentWillMount(){
        this.setState(function(currentState, props) {
            return Object.assign({}, this.props);
        });
    }

    handlerClick(event){
        var GotMark = event.target.getAttribute('mark');
        //console.log(GotMark);
        var savedState = this.state;
        this.setState(function(currentState, props) {
            savedState.ext = !currentState.ext;
            return savedState;
        });
    }

    render(){
        return(
            <p className="pQuestion"><a href="#" onClick={this.handlerClick} mark={this.state.index}>{this.state.FAQ_obj.question}</a>
                {this.state.ext ? <span className="spanAnswer">{this.state.FAQ_obj.answer}</span> : ''}
            </p>
        );
    }
}

class FAQ extends React.Component {
    render(){
        return (
            <div className="divForFAQ">
                {this.props.FAQ_obj.map((i, index)=>
                    <MakeQuestionAnswer FAQ_obj={i} index={index} key={index}/>
                )}
            </div>);
    }
}

export default FAQ;