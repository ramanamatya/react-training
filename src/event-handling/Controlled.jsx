import React from 'react';

class Controlled extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: 'yo',
      commentList: [],
      showError: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    this.setState({
      formValue: evt.target.value
    });
  }

  handleClick() {
    const {commentList, formValue} = this.state;
    if (!formValue.length) {
      return false;
    }
    this.setState({
      commentList: [...commentList, formValue],
      formValue: '',
    });
  }

  renderComments() {
    const {commentList} = this.state;
    return(<div className="mb-4">
      {
        commentList.map((comment, index) =>
          <div className="border-bottom" key={`my${comment}${index}`}>{ comment }</div>)}
    </div>
    );
  }

  render() {
    return (
    <>
      <h2></h2>
      <div className="p-4 w-50 mx-0">
        <h3>List of comments</h3>
        {this.state.showError ? <span>Error</span> : null}
        {this.renderComments()}
        <label className="mr-2">Comments</label>
        <input className="w-100" type="text" value={this.state.formValue} onChange={this.handleChange}/>
        <button className="btn btn-primary" onClick={this.handleClick}>Submit</button>
      </div>
      </>
    );
  }
}

export default Controlled;