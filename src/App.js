import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test'

import Demo from './Demo'

import PropTypes from 'prop-types'

class Title extends Component{
  static propTypes = {
    title : PropTypes.string
  }
  static defaultProps ={
    title:"這是預設標題"
  }
  render(){
    return(
      <div>{this.props.title}</div>
    )
  }
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isRenderTest : false
    }
}
  render() {
    return (
      <div>
        <Title title={0}></Title>
        {/*{this.state.isRenderTest ? <Demo></Demo>:"不渲染Demo"}
        <p>App</p>
        <button type="button" onClick={()=>this.setState({})}>APP setState更新</button>
        <button type="button" onClick={()=>{this.setState({isRenderTest: !this.state.isRenderTest})}}>切換Demo渲染</button>
        */}
      </div>
    );
  }
}

export default App;
