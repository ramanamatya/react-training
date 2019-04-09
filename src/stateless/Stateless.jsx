import React from 'react';

// export default class Stateless extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div className="p-4 w-50 mx-0">
//         {this.props.name}
//       </div>
//     );
//   }
// }

const Stateless = (props) => 
  <div className="p-4 w-50 mx-0">
      {props.name}
  </div>;

export default Stateless;