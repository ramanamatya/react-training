import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSuperHeroList, addSuperHero} from '../actions';

const HooksExample = (props) => {
  const [name, setName] = useState('');
  const [heroName, setHeroName] = useState('');
  const [power, setPower] = useState('');
  const [weakness, setWeakness] = useState('');

  useEffect(() => {
    props.dispatch(getSuperHeroList());
    }, []
  )
  
  const handleBtnClick = () => {
    const hero = {
      name, hero_name: heroName, power, weakness
    };
    props.dispatch(addSuperHero(hero));
    setName('');
  }

  return (
    props.isLoading ? <div>Is loading....</div> :
    <>
    <table className="table table-striped table-bordered">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Hero Name</th>
          <th scope="col">Power</th>
          <th scope="col">Weakness</th>
        </tr>
      </thead>
      <tbody>
        {
          props.lists.map((list) => 
            (
              <tr>
                <td scope="row">{list.name}</td>
                <td>{list.hero_name}</td>
                <td>{list.power}</td>
                <td>{list.weakness}</td>
              </tr>
            ))
        }
        <tr>
          <td>
            <input type="text" id="name" value={name} onChange={(evt) => setName(evt.target.value)} />
          </td>
          <td>
            <input type="text" id="hero-name"value={heroName} onChange={(evt) => setHeroName(evt.target.value)} />
          </td>
          <td>
            <input type="text" id="power"value={power} onChange={(evt) => setPower(evt.target.value)} />
          </td>
          <td>
            <input type="text" id="weakness"value={weakness} onChange={(evt) => setWeakness(evt.target.value)} />
          </td>
        </tr>
      </tbody>
    </table>
    <button className="btn btn-primary" onClick={handleBtnClick}>Submit</button>
    </>
  );
}

const mapStateToProps = store => ({
  lists: store.lists,
  isLoading: store.isLoading
});

export default connect(mapStateToProps)(HooksExample);
