// const HooksExample = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSuperHeroList } from '../actions';

const HooksExample = (props) => {
  useEffect(() => {
    props.dispatch(getSuperHeroList());
  }, []);

  const getContent = () => {
    const { lists } = props;
    return(
      <tbody>
        {
          lists.map((list) => {
            return(
              <tr>
                <th scope="row">{list.name}</th>
                <td>{list.hero_name}</td>
                <td>{list.power}</td>
                <td>{list.weakness}</td>
              </tr>
            )})
        }
      </tbody>
    );
  }

  return (
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Hero Name</th>
          <th scope="col">Power</th>
          <th scope="col">Weakness</th>
        </tr>
      </thead>
      {getContent()}
    </table>
  );
}

const mapStateToProps = store => ({
  lists: store.lists,
});

export default connect(mapStateToProps)(HooksExample);

// export default HooksExample;

