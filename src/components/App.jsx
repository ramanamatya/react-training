import React, { Component } from 'react';
import NameLabel from './NameLabel';
import Comment from './Comment';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Raman',
      lastname: 'Amatya',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'Which flavour do you want?',
        lastname: '',
      });
    }, 2000);
  }

  render() {
    const { name, lastname } = this.state;
    return (
      <div className="wrapper">
        <NameLabel name={name} lastname={lastname} />
        <Comment />
      </div>
    );
  }
}

export default App;
