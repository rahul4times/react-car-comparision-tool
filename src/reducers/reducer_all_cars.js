import _ from 'lodash';
import {FETCH_CARS, FETCH_ONE} from '../actions';

export default function (state={}, action){
  switch(action.type){
    case FETCH_ONE:
      return {...state, [action.payload.data[0].id] : action.payload.data[0]};
      // const car = action.payload.data;
      // const newState = {...state};
      // newState[car.id] = car;
      // return newState;
    case FETCH_CARS:
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
