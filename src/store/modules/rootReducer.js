import { combineReducers } from 'redux';

import alert from './components/alert/reducer';
import loading from './components/loading/reducer';
import modalBottomConfirm from './components/modalBottomConfirm/reducer';
import home from './app/home/reducer';

export default combineReducers({
    alert,
    loading,
    modalBottomConfirm,
    home,
});
