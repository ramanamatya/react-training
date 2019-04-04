import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: 'yo',
      commentsList: [],
    };
    // handlechange ma arrow function use garne bhaye bind garnu pardaina
    // state chalauna paryo bhane matra bind ho nabhaye pardaina
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      formValue: evt.target.value,
    });
  }

  handleClick() {
    // concat, push pr use spread operator ...
    const { commentsList, formValue } = this.state;

    if (commentsList.includes(formValue)) {
      console.log('Error');
    }
    this.setState({
      commentsList: [...commentsList, formValue],
      formValue: '',
    });
  }

  renderComments() {
    const { commentsList } = this.state;
    return (
      // yeslai chai fragment bhancha
      <>
        <h3>Comments List</h3>
        <div className="mb-4">
          { commentsList.map((comment, index) => <div key={`${index + 1}`}>{comment}</div>) }
        </div>
      </>
    );
  }

  render() {
    const { formValue } = this.state;
    return (
      <div className="p-4 w-50 mx-0">
        {this.renderComments()}
        <label className="mr-2">Comments</label>
        <input className="w-100" type="text" value={formValue} onChange={this.handleChange} />
        <button type="submit" onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default Comment;
