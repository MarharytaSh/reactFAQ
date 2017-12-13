import React, { Component } from 'react';
import logo from '../logo.svg';
//import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { render } from 'react-dom';
import { connect } from 'react-redux';
import About from './About';




class App extends React.Component{
    constructor(props){
        super(props);
        this.handlerClickAdd = this.handlerClickAdd.bind(this);
        this.handlerClickClear = this.handlerClickClear.bind(this);
        this.handlerDELETEsong=this.handlerDELETEsong.bind(this);
    }
    handlerClickClear (){
        let typeDesc='CLEAR_ALL';
        this.props.onAddTract('undefined', typeDesc);
    }
    handlerDELETEsong(){
        let typeDesc='DELETE_SONG';
        console.log(this.textInput.value);
        this.props.onAddTract(this.textInput.value,typeDesc);
        this.textInput.value = '';
        console.log(this.props.song);
    }
    handlerClickAdd(){
        let typeDesc='ADD_SONG';
        console.log(this.textInput.value);
        this.props.onAddTract(this.textInput.value,typeDesc);
        this.textInput.value = '';
    }
    render(){
        console.log(this.props.song);
        return (<div>
            <label>Add song <input type="text" id="inputApp" ref = {(input)=> {this.textInput = input; }}/></label>
            <input type="button" value="Add" onClick={this.handlerClickAdd}/>
            <input type="button" value="Delete" onClick={this.handlerDELETEsong}/>
            <input type="button" value="Clear" onClick={this.handlerClickClear}/>
                <ul>
                     {this.props.song.map((elem,index)=> <li key={index}>{elem}</li>) }
                </ul>
        </div>);
    }
}

export default connect (state=>({
    song: state.song
}), (dispatch) =>({
    onAddTract: (song,typeDesc)=>{dispatch({type:typeDesc, song: song})}
}))(App);

/*import {About, WhyWebest,AboutSecond} from './About';
class NotFound extends React.Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}

class Main extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <h1 className="h1Main">Главная</h1>
                <div className="divDalee">
                    <Link to='/about'> Далее </Link>
                </div>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Main}/>
                <Route path="/about" component={About} />
                <Route path="/whyWebest" component={WhyWebest} />
                <Route path="/aboutSecond" component={AboutSecond} />
            </div>
        </Router>
     <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}//export {App, connect};
*/

