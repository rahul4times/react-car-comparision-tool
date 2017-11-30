import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOneCar } from '../actions';
import _ from 'lodash';

class CarShow extends Component {

  componentDidMount(){
    console.log('comp did mount: ', this.props.match);
    const { id } = this.props.match.params.id;
    this.props.fetchOneCar(id);
  }


  render(){

    // car comes first as undefined then it gets that particular id of car
    // if(!car){
    //   <div>Loading...</div>
    // }

    return(
      <div>
        hello
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){  
  const id = parseInt(ownProps.match.params.id);
  return { car: state.cars };
}

export default connect(mapStateToProps, { fetchOneCar })(CarShow);
