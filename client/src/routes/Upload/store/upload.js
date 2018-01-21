import {createAction, handleActions} from 'redux-actions'
import createFetchAction from 'src/util/fetchAction'
import {config} from 'src/util'

export const dispatchListOK = createAction('查询列表-成功')
export const fetchList = createFetchAction('/api/suggestion/list?page_number={{page_number}}&page_size={{page_size}}', [dispatchListOK])
export const dispathcAdminInfo = createAction('dispathcAdminInfo')
export const fetchAdminInfo = createFetchAction('/api/admin/info', [dispathcAdminInfo], 'get')
export const dispatchImageUpload = createAction('dispatchImageUpload')
export const fetchImageUpload = createFetchAction('/api/admin/upload', [dispatchImageUpload], 'post')

const reducer = handleActions({
  [dispatchListOK] (state, {payload}) {
    return {
      ...state,
      List: payload.data
    }
  },
  [dispathcAdminInfo] (state, {payload}) {
    return {
      ...state,
      AdminInfo: payload
    }
  },
  [dispatchImageUpload] (state, {payload}) {
    return {
      ...state,
      ImageUpload: payload
    }
  }
}, {})
export default reducer
