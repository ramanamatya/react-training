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

  handleSubmit(evt) {
    evt.preventDefault();
    const {formValue, commentList} = this.state;

    this.setState({
      commentList: [...commentList, formValue],
      formValue: '',
    });

  }

  render() {
    const {formValue, commentList} = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="p-4 w-50">
          <div className="mb-5">
            <h3> List of Comments </h3>
            { commentList.map( comment => <div className="border-bottom">{comment}</div>) }
          </div>
          <div>
            <label className="mr-2">Comments</label>
            <input className="w-100 mb-3" type="text" value={formValue} onChange={this.handleChange} />
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Example;