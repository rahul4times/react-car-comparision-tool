import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import carsReducer from './reducer_all_cars';

const rootReducer = combineReducers({
  cars: carsReducer,
  form: formReducer
});

export default rootReducer;
