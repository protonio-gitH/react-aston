import React from "react";
import Test from "./test";


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      s1:'',
      s2:0
    };

  }

  inputHandler = (e) => {
    this.setState({s1:e.target.value});
  }

  buttonHandler = (e) => {
    e.preventDefault();
    this.setState({s2:this.state.s1});
    this.setState({s1:''});
  }

  componentDidMount(){
    console.log('1'); 
  }

  componentDidUpdate(){
    console.log('2'); 
  }

  componentWillUnmount(){
    console.log('3');
  }

  render() {
    return (
      <form>
        <input onChange={this.inputHandler} value={this.state.s1}/>
        <button onClick={this.buttonHandler}>Кнопка</button>
        <Test text = {this.state.s2}/>
      </form>
    )
  }
}

export default App;
