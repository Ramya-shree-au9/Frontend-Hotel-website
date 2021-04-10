import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Store from './store'
import Routing from './components/Routing'
import './index.css';

const App = ()=> {
  return ( 
    <Provider store={Store}>
    <Routing />
    </Provider>
     
  )
}
  
ReactDOM.render(<App/>,document.getElementById("root"))


// in js file only render method called

