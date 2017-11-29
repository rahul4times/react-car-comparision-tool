import { combineReducers } from 'redux';
import carsReducer from './reducer_all_cars';

const rootReducer = combineReducers({
  cars: carsReducer
});

export default rootReducer;
