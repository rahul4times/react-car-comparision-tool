import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';
import reducers from './reducers';

// Component goes here
import CarsList from './containers/cars_list';
import PostNewCar from './components/post_new_car';
import CarShow from './components/car_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/cars/add" component={PostNewCar}/>
          <Route path="/cars/:id" component={CarShow}/>
          <Route path="/" component={CarsList}/>
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
