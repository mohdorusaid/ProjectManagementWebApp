import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'; 
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer=combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    user: userReducer
});

export default rootReducer;