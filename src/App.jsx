import React, { Component } from 'react';
import NameLabel from './NameLabel';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Puja Jha is good',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Puja is very good',
      });
    }, 4000);
  }

  render() {
    return (
      <div>
        <NameLabel name={this.state.name} />
        <span>dsadsdsd</span>
      </div>
    );
  }
}

export default App;
