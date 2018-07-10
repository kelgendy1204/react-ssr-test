import { combineReducers } from 'redux';

export default combineReducers({
    photo: (state = null, action) => {
        switch (action.type) {
            case "CHANGE_PHOTO":
                return action.payload;
            default:
                return state;
        }
    },
    post: (state = null, action) => {
        switch (action.type) {
            case "CHANGE_POST":
                return action.payload;
            default:
                return state;
        }
    }
});
