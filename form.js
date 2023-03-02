import React, { Component } from "react";

import jsonfile from'jsonfile'; //json file import kr

var file = 'data.json'

var obj = {name: 'JP'}


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.sendDataSomewhere = this.sendDataSomewhere.bind(this);
}


handleChange = (e, {name, value}) => {
  this.setState({[name]: value})
}

sendDataSomewhere = function jsonfile(file){
jsonfile.writeFile(file, obj, function (err) {
  console.error(err);
});
};

  render() {
    return (
        
     <div>
        {/*  */}
      <Form onSubmit={this.sendDataSomewhere}> 
        <Form.Field>
          <Form.Input name="name" value={this.state.name} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <Form.Input name="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Field>
        <Button type="submit">Submit</Button>
       </Form>
     </div>
    );
  }
}