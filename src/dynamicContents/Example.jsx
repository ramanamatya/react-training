import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: '',
      commentList: []
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

    this.setState({
      commentList: [...commentList, formValue],
      formValue: '',
    });

  }

  render() {
    const {formValue, commentList} = this.state;

    return (
      <div className="p-4 w-50">
        <div className="mb-5">
          <h3> List of Comments </h3>
          { commentList.map( comment => <div className="border-bottom">{comment}</div>) }
        </div>
        <div>
          <label className="mr-2">Comments</label>
          <input className="w-100 mb-3" type="text" value={formValue} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Example;