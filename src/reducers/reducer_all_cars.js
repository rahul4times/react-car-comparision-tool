import _ from 'lodash';
import {FETCH_CARS, FETCH_ONE, DELETE_CAR} from '../actions';

export default function (state={}, action){
  switch(action.type){
    case DELETE_CAR:
      return _.omit(state, action.payload);
    case FETCH_ONE:
      //es6 style
      return {...state, [action.payload.data[0].id] : action.payload.data[0]};
      //es5 style
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
