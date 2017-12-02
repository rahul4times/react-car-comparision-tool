import axios from 'axios';

export const FETCH_CARS = 'fetch_cars';
export const FETCH_ONE = 'fetch_one';
export const CREATE_CAR = 'create_car';
export const DELETE_CAR = 'delete_car';

const ROOT_URL = "https://g66backserver.herokuapp.com/";
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
  const request = axios.get(`${ROOT_URL}cars/${id}${KEY}`);
  return{
    type: FETCH_ONE,
    payload:  request
  };
}

// Purpose of this function is to delete car
export function deleteCar(id, callback){
  const request = axios.delete(`${ROOT_URL}cars/${id}${KEY}`)
  .then(() => callback());
  return{
    type: DELETE_CAR,
    payload: id
  }
}
