import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';

class CarsList extends Component{

  renderCarsList(){
    return _.map(this.props.cars, car => {
      return (
        <tr key={car.id}>
          <td>{car.year}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.miles}</td>
          <td>{car.price}</td>
        </tr>
      );
    });
  }

  componentDidMount(){
    this.props.fetchCars();
  }

  render(){
    console.log('car list: ', this.props.cars);
    return(
      <div>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Make</th>
              <th>Model</th>
              <th>Miles</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCarsList()}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cars : state.cars
  };
}

// connect takes a function parameter(mapStateToProps)
// and a component (CarsList) and creates a container
export default connect(mapStateToProps, { fetchCars })(CarsList);
