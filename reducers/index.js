import { combineReducers } from 'redux';

export default combineReducers({
    photo: (state = null, action) => {
        switch (action.type) {
            case "CHANGE_PHOTO":
                return action.payload;
            default:
                return state;
        }
    }
});
