import axios from 'axios';

export const FETCH_CARS = 'fetchCars';
export const CREATE_CAR = 'createCar';

const ROOT_URL = "https://g66backend.herokuapp.com/";
const KEY = "?GOPOPJIGGLYJAM";

// Purpose of this function is to fetch the list of cars
export function fetchCars(){
  const request = axios.get(`${ROOT_URL}cars${KEY}`)
  return{
    type: FETCH_CARS,
    payload: request
  }
}

// Purpose of this function is to post data on server
export function createCar(values){
  const request = axios.post(`${ROOT_URL}cars${KEY}`, values);
  return{
    type: CREATE_CAR,
    payload: request
  };
}
