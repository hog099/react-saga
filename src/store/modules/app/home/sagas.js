import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../../services/api';
import { functionSuccess } from './actions'


export function* functionActionRequest({ payload }) {
    console.log('payload', payload)
    const values = {
        parbusca: payload
    };
    try {
        if (payload !== undefined) {
            const response = yield call(api.post, 'categoriesparbusca', values);
            // console.log('Categorias da api',response.data)
            yield put(functionSuccess(response.data));

        } else {
            const response = yield call(api.get, 'categories');
            yield put(functionSuccess(response.data));
        }

    } catch (error) {
        // console.log('res erro', error.response.data.error)

    }

}





export default all([
    takeLatest('@home/NAME_EVENT_DISPATCH_REQUEST', functionActionRequest),
]);
