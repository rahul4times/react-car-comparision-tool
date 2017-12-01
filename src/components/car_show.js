import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOneCar } from '../actions/index';


class CarShow extends Component {

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchOneCar(id);
  }


  render(){


    //car comes first as undefined then it gets that particular id of car
    if(!this.props.car){
      return(<div>Loading...</div>)
    }

    return(
      <div>

        Year: {this.props.car.year}
        <br/>
        Make: {this.props.car.make}
        <br/>
        Model: {this.props.car.model}
        <br/>
        Miles: {this.props.car.miles}
        <br/>
        Price: {this.props.car.price}
      </div>
    );
  }
}

function mapStateToProps({ cars }, ownProps){
  console.log('state on carshow: ', cars);
  return { car: cars[ownProps.match.params.id]};
}

export default connect(mapStateToProps, { fetchOneCar })(CarShow);
