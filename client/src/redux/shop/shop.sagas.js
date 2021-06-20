import { takeLatest, call, put, all } from 'redux-saga/effects';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {
    fecthCollectionsSuccess,
    fecthCollectionsFailure
} from './shop.actions';
import ShopActionTypes from './shop.types';

export function* fetchCollectionsAsync() {
    yield console.log('I am fired');

    try {
        const collectionRef = firestore.collection('collections');
        const snapshop = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshop)
        yield put(fecthCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fecthCollectionsFailure(error.message));
    }
};

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsAsync
    );
};

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
};