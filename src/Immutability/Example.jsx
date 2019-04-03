import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { comment } from 'postcss-selector-parser';

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
    
    //bad practice which changes the original state directly.
    commentList.push(formValue);
    this.setState({
      commentList: commentList,
      formValue: '',
    });

    // //recommended approaches
    // //using concat which will create a new array and update that to state
    // this.setState({
    //   commentList: commentList.concat([formValue]),
    //   formValue: '',
    // });

    // //using spread operator
    // this.setState({
    //   commentList: [...commentList, formValue],,
    //   formValue: '',
    // });

    //if the comment list was an object

    // this.setState({
    //   commentList: Object.assign({}, oldState, newObject);
    // });
  }

  render() {
    const {formValue, commentList} = this.state;

    return (
      <div className="p-4 w-50">
        <div className="mb-5">
          {`Number of comments: ${commentList.length}`}
        </div>
        <div className="">
          <label className="mr-2">Comments</label>
          <input className="w-100 mb-3" type="text" value={formValue} onChange={this.handleChange} />
          <button className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Example;