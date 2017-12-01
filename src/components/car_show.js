import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOneCar } from '../actions';


class CarShow extends Component {

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchOneCar(id);
  }


  render(){

    const { car } = this.props;
    //car comes first as undefined then it gets that particular id of car
    if(!car){
      <div>Loading...</div>
    }

    return(
      <div>
        Year: {car.year}
      </div>
    );
  }
}

function mapStateToProps({ cars }, ownProps){
  console.log('cars on carshow page: ', cars);
  return { car: cars[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchOneCar })(CarShow);
