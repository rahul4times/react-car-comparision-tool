import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchOneCar } from '../actions';
class CarShow extends Component {
  componentDidMount(){
    const { id } = this.props.match.params.id;
    this.props.fetchOneCar(id);
  }
  render(){
    return(
      <div>
        CarShow Page
      </div>
    );
  }
}

function mapStateToProps({ cars }, ownProps){
  return {
    car: cars[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { fetchOneCar })(CarShow);
