import { all } from 'redux-saga/effects';

import home from './app/home/sagas';

export default function* rootSaga() {
  return yield all([
      home,
]);
}
