import axios from 'axios';

export const FETCH_CARS = 'fetchCars';

const ROOT_URL = "https://g66backend.herokuapp.com/";
const KEY = "?GOPOPJIGGLYJAM";

// Purpose of this function is to fetch the list of cars
export function fetchCars(){
  const reaquest = axios.get(`${ROOT_URL}/cars${KEY}`)
  return{
    type: FETCH_CARS,
    payload: request
  }
}
