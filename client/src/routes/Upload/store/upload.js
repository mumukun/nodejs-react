import {createAction, handleActions} from 'redux-actions';
import createFetchAction from 'src/util/fetchAction';
import {config} from 'src/util'


export const dispatchListOK = createAction('查询列表-成功');
export const dispatchImageUpload = createAction('dispatchImageUpload');
export const fetchList = createFetchAction('/api/suggestion/list?page_number={{page_number}}&page_size={{page_size}}', [dispatchListOK]);
export const fetchImageUpload = createAction('')

const reducer = handleActions({
  [dispatchListOK](state, {payload}) {
    return {
      ...state,
      List: payload.data
    }
  },
}, {});

export default reducer
