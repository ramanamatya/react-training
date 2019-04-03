import React from 'react';

class Controlled extends React.Component {
  constructor() {
    super();
    this.state = {
      formValue: 'yo',
    }
  }
  render() {
    return (
      <div className="p-4 w-50 mx-0">
        <label className="mr-2">Comments</label>
        <input className="w-100" type="text" value={this.state.formValue}/>
      </div>
    );
  }
}

export default Controlled;