import {combineReducers} from 'redux';
import {firestoreReducer} from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'; 
import authReducer from './authReducer';
import userReducer from './userReducer';
import projectReducer from './projectReducer';
import toDoReducer from './toDoReducer';
import messageReducer from './messageReducer';

const rootReducer=combineReducers({
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    auth: authReducer,
    users: userReducer,
    projects: projectReducer,
    todos: toDoReducer,
    messages: messageReducer
});

export default rootReducer;