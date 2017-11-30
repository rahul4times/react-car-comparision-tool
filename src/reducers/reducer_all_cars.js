import _ from 'lodash';
import {FETCH_CARS, FETCH_ONE_CAR} from '../actions';

export default function (state={}, action){
  switch(action.type){
    case FETCH_ONE_CAR:
      return {...state, [action.payload.data.id] : action.payload.data};
    case FETCH_CARS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
