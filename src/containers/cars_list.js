import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCars } from '../actions';
import { Link } from 'react-router-dom';
import Img from 'react-image';

class CarsList extends Component{

  renderCarsList(){
    const imageSize = {
      width: '90px',
      height: '100px'
    };
    return _.map(this.props.cars, car => {
      return (
        <tr key={car.id}>
          <td><Img
            style={imageSize}
            src={ car.photo_url }
          /></td>
          <td>{car.year}</td>
          <td>{car.make}</td>
          <td>{car.model}</td>
          <td>{car.miles}</td>
          <td>${car.price}</td>
          <td>
            <button className="action-button">Compare</button>
            <button className="action-button">Edit</button>
            <button className="action-button">Remove</button>
          </td>
        </tr>
      );
    });
  }

  componentDidMount(){
    this.props.fetchCars();
  }

  render(){

    return(

      <div className="cars-table">
        <div className="app-navigation">
          <br/>
          <Link to="/cars/add">
            Add New Car
          </Link>
          <br/>
          <br/>
        </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Year</th>
                <th>Make</th>
                <th>Model</th>
                <th>Miles</th>
                <th>Price</th>
                <th>Action</th>
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
  console.log('state on all car: ', state);
  return {
    cars : state.cars
  };
}

// connect takes a function parameter(mapStateToProps)
// and a component (CarsList) and creates a container
export default connect(mapStateToProps, { fetchCars })(CarsList);
