import produce from 'immer';

const initialState = {
    homeState: [],
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@home/NAME_EVENT_DISPATCH_SUCCESS': {
                draft.homeState = payload;
                break;
            }
            default:
        }
    });
};
