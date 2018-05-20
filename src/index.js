import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import counter from './Reducer/Counter'

const store = createStore(counter)

const render = () => {
    ReactDOM.render(<App    
        value={store.getState()}
        onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
        />, 
        document.getElementById('root')
    );
}

render();
store.subscribe(render);


registerServiceWorker();

