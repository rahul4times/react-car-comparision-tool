import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOneCar, deleteCar } from '../actions';
import { Link } from 'react-router-dom';
import Img from 'react-image';

class CarShow extends Component {

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchOneCar(id);
  }

  // this function is responsible for deleting car
  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deleteCar(id, () => {
      this.props.history.push('/');
    });
  }

  render(){

    //car comes first as undefined then it gets that particular id of car
    if(!this.props.car){
      return(<div>Loading...</div>)
    }

    const imageSize = {
      width: '350px',
      height: '300px'
    };

    return(
      <div>
        <br/>
        <Link to="/cars/">
          back
        </Link>
        <br/>
        <br/>
        <button onClick={this.onDeleteClick.bind(this)}>
          Delete
        </button>
        <br/>
        <br/>
        <Img
          style={imageSize}
          src={this.props.car.photo_url}
        />
        <br/>
        <h2>
          {`${this.props.car.year}
          ${this.props.car.make}
          ${this.props.car.model}`}
        </h2>
        <br/>
        <strong>Miles:</strong> {this.props.car.miles}
        <br/>
        <strong>Price:</strong> ${this.props.car.price}
      </div>
    );
  }
}

function mapStateToProps({ cars }, ownProps){
  return { car: cars[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchOneCar, deleteCar })(CarShow);
