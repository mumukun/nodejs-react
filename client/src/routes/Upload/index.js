import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path : 'upload',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Uploads = require('./containers/UploadFormPage').default
      const reducer = require('./store/upload').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'Uploads', reducer })

      /*  Return getComponent   */
      cb(null, Uploads)

      /* Webpack named bundle   */
    }, 'Uploads')
  }
})
