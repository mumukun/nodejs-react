import {createAction, handleActions} from 'redux-actions'
import createFetchAction from '../../../store/fetchAction'


export const fetchAuqaticActivityOK = createAction('fetchAuqaticActivityOK');
export const fetchPetAddOK = createAction('fetchPetAddOK');
export const fetchUploadOK = createAction('fetchUploadOK');
// export const dispatchAuqaticActivity = createFetchAction('/noa/water/activity?user_id={{userId}}', [fetchAuqaticActivityOK]);
export const dispatchAuqaticActivity = createFetchAction('/v2/movie/subject/1764796', [fetchAuqaticActivityOK]);
// export const dispatchAuqaticActivity = createFetchAction('/pet', [fetchAuqaticActivityOK]);
// export const dispatchAuqaticActivity = createFetchAction('/noa/plant/exchange', [fetchAuqaticActivityOK]);

export const dispatchPetAdd = createFetchAction('/api/pet', [fetchPetAddOK],'POST')
export const dispatchUpload = createFetchAction('/api/picture/upload-pic', [fetchUploadOK],'POST')

const reducer = handleActions({
  [fetchAuqaticActivityOK]: (state, {payload}) => ({...state, uploadStatus: payload}),
  [fetchPetAddOK]: (state, {payload}) => ({...state, addStatus: payload}),
  [fetchUploadOK]: (state, {payload}) => ({...state, upload: payload}),
}, {})
export default reducer
