import { createStore } from 'redux';
import reducer from '../reducers';

const getStore = () => {
    let store = createStore(reducer);
    
    return store;
};

export default getStore;