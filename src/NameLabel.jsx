import React, { Component } from 'react';
import Select from 'react-select';
import './App.scss';

export default class NameLabel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, lastname } = this.props;
    const options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ];
    return (
      <div>
        <h1>{ name }</h1>
        <Select
          options={options}
          placeholder="Select Flavour"
          isMulti
        />
      </div>
    );
  }
}
