import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = {
    errMess: null,
    feedbacks: []
}, action) => {
    switch(action.type) {
        case ActionTypes.FEEDBACKS_FAILED:
            return {...state, errMess: action.payload, feedbacks: []};
        case ActionTypes.ADD_FEEDBACKS:
            var feedback = action.payload;
            return {...state, feedbacks: state.feedbacks.concat(feedback)};
        default:
            return state;
    }
}