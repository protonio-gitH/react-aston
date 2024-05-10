import React from "react";
import Test from "./test";
import List from "./List";


class App extends React.Component{

  constructor(){
    super();

    this.state = {
      s1:'',
      s2:0,
      disabled:false,
    };

  }

  inputHandler = (e) => {
    this.setState({s1:e.target.value});

    if (e.target.value === 'реакт'){
      this.setState({disabled:true});
    }
    else{
      this.setState({disabled:false});
    }
  }

  buttonHandler = (e) => {
    e.preventDefault();
    this.setState({s2:this.state.s1});
    this.setState({s1:''});
  }

  focusHandler = (e) => {
    e.preventDefault();
    this.input.focus();
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
        <input ref={input => this.input = input} onChange={this.inputHandler} value={this.state.s1}/>
        <button disabled={this.state.disabled} onClick={this.buttonHandler}>Кнопка</button>
        <button onClick={this.focusHandler}>Фокус</button>
        <Test text = {this.state.s2}/>
        <List/>
      </form>
    )
  }
}

export default App;
