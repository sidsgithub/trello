import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import { createStore, 
  // applyMiddleware
} from 'redux';
import rootReducer from './Redux/Reducers/index'

const store = createStore(rootReducer);
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
