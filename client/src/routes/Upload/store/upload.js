import {createAction, handleActions} from 'redux-actions';
export const fetchAuqaticActivityOK = createAction('fetchAuqaticActivityOK');
export default handleActions({
  [fetchAuqaticActivityOK]: (state, {payload}) => ({...state, Activity: payload}),
}, {});
