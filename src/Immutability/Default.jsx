import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class  Example extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      formValue: evt.target.value
    });
  }

  handleSubmit() {
    const {formValue, commentList} = this.state;
    // update list
  }

  render() {
    return (
      <div className="p-4 w-50 mx-0">
        <label className="mr-2">Comments</label>
        <input className="w-100 mb-3" type="text" value={this.state.formValue} onChange={this.handleChange} />
        <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default Example;