import React from "react";

class Test extends React.Component{

  constructor(props){
    super();
    this.props = props;
  }

  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}

export default Test;
