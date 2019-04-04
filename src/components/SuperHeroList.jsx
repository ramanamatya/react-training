import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSuperHeroList } from '../actions';

export class SuperHeroList extends Component {

  componentDidMount() {
    this.props.dispatch(getSuperHeroList());
  }

  getContent() {
    const { lists } = this.props;
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

  render() {
    console.log(this.props);
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
        {this.getContent()}
      </table>
    );
  }
}

const mapStateToProps = store => ({
  lists: store.lists,
});

export default connect(mapStateToProps)(SuperHeroList);
