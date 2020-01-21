import produce from 'immer';

const initialState = {
    messageAlert: '',
    colorMessageAlert: 1,
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            //   case '@auth/SIGN_IN_REQUEST': {
            //     draft.loading = true;
            //     break;
            //   }
            case '@alert/SEARCH_CITY_FAIL': {
                draft.messageAlert = payload.messageAlert;
                draft.colorMessageAlert = payload.colorMessageAlert;
                break;
            }
            case '@alert/CLEAR_ALERT': {
                draft.messageAlert = '';
                draft.colorMessageAlert = 1;
                break;
            }
            case '@alert/SIGN_FAILURE': {
                draft.messageAlert = payload.messageAlert;
                draft.colorMessageAlert = 3;
                break;
            }
            default:
        }
    });
};
