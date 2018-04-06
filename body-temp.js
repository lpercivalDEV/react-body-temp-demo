//Project Name: React Body Temp App
//Client Name: Leon Noel
//Authors: Lilly Percival and Manny Santiago

import React, { Component } from 'react';
import { render } from 'react-dom';
const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};
class Temp extends Component{
  state = { currentTemp: 96 };
  bodyTemp=function(e){
    this.setState({currentTemp: e.target.value});
  }
  render(){
    var stateOfBodyTemp;
    if (this.state.currentTemp <= 96){
      stateOfBodyTemp = "hypothermia";
    }else if(this.state.currentTemp >= 99.5){
      stateOfBodyTemp = "fever";
    }else{
      stateOfBodyTemp = "normal";
    }

  return(
    <div>
      <input
      type="text"
      onChange = {this.bodyTemp.bind(this)}
      value = {this.state.currentTemp}
      />
      <p>At {this.state.currentTemp}F, body temp is considered to be "{stateOfBodyTemp}".
      </p>
    </div>
  );
  }
}
class App extends Component{
  render(){
    const style = {flex: 1, justifyContent: "center", alignItems: "center"};

  return(
    <div style={style}>

    <Temp />
    </div>
  );
  }
}
render(<App />, document.querySelector('#root'));
