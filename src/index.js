import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import * as serviceWorker from './serviceWorker'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './store/reducer/rootReducer'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import moment from 'moment'
import 'moment/locale/th'
moment.locale('th')

const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig, { 
            useFirestoreForProfile: true,
            userProfile: 'users',
            attachAuthIsReady: true }),
    )
)

store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
})
