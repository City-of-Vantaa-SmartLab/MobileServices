import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import { watcher } from 'actions';



const getStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    let store = createStore(
        reducer,
        applyMiddleware(sagaMiddleware),
    );
    
   sagaMiddleware.run(watcher);
    
    return store;
};

export default getStore;