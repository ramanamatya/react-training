import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSuperHeroList, addSuperHero } from '../actions';

const Hooks2 = (props) => {
  const [name, setName] = useState('');
  const [heroName, setHeroName] = useState('');
  const [power, setPower] = useState('');
  const [weakness, setWeakness] = useState('');
  useEffect(() => {
    props.dispatch(getSuperHeroList());
  }, []);

  const handleClick = () => {
    const params = {
      name, hero_name: heroName, power, weakness,
    };
    props.dispatch(addSuperHero(params));
  };

  return (
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
        {/* {this.getContent()} */}
        <tbody>
          {
              props.lists.map(list => (
                <tr>
                  <th scope="row">{list.name}</th>
                  <td>{list.hero_name}</td>
                  <td>{list.power}</td>
                  <td>{list.weakness}</td>
                </tr>
              ))
            }
          <tr>
            <td><input type="text" id="name" value={name} onChange={evt => setName(evt.target.value)} /></td>
            <td><input type="text" id="hero-name" value={heroName} onChange={evt => setHeroName(evt.target.value)} /></td>
            <td><input type="text" id="power" value={power} onChange={evt => setPower(evt.target.value)} /></td>
            <td><input type="text" id="weakness" value={weakness} onChange={evt => setWeakness(evt.target.value)} /></td>
          </tr>
        </tbody>
      </table>
      <br />
      <button className="btn btn-success" onClick={handleClick}>Submit</button>
    </>
  );
};

const mapStateToProps = store => ({
  lists: store.lists,
});

export default connect(mapStateToProps)(Hooks2);
