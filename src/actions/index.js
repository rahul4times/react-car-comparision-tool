import axios from 'axios';

export const FETCH_CARS = 'fetchCars';
export const FETCH_ONE_CAR = 'fetchOneCar';
export const CREATE_CAR = 'createCar';

const ROOT_URL = "https://g66backend.herokuapp.com/";
const KEY = "?GOPOPJIGGLYJAM";

// Purpose of this function is to fetch the list of cars
export function fetchCars(){
  const request = axios.get(`${ROOT_URL}cars${KEY}`);
  return{
    type: FETCH_CARS,
    payload: request
  };
}

// Purpose of this function is to post data on server
export function createCar(values, callback){
  const request = axios.post(`${ROOT_URL}cars${KEY}`, values)
  .then(() => callback());
  return{
    type: CREATE_CAR,
    payload: request
  };
}

// Purpose of this function is to display just one car
export function fetchOneCar(id){
  console.log('id in action: ', id);
  const request = axios.get(`${ROOT_URL}cars/${id}${KEY}`);
  return{
    type: FETCH_ONE_CAR,
    payload: request
  };
}
