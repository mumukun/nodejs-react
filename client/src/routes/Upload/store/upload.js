import {createAction, handleActions} from 'redux-actions';
import createFetchAction from 'src/util/fetchAction';

export const dispatchListOK = createAction('查询列表-成功');
export const dispatchList = createFetchAction('/api/suggestion/list?page_number={{page_number}}&page_size={{page_size}}', [dispatchListOK]);

export default handleActions({
  [dispatchListOK](state, {payload}) {
    return {
      ...state,
      List: payload.data
    }
  },
}, {});
