//api version
const APIV1 = '/api/v1'
const APIV2 = '/api/v2'
const API_ENV = '/api'
const NO_AUTHORITY = '/noa'
const VERSION = 'v0.1.0'
const SERVER = 'http://127.0.0.1:8089'
const PROD_SERVER = ''
const DEV_SERVER = ''

module.exports = {
  name: '大坤的自留地',
  prefix: 'admin',
  version: VERSION,
  server: SERVER,
  footerText: `大坤的自留地  ${VERSION} © 2017 `,
  logo: '/logo.png',
  iconFontCSS: '/iconfont.css',
  iconFontJS: '/iconfont.js',
  CORS: [],
  openPages: ['/login'],
  apiPrefix: '/api',
  APIV1,
  APIV2,
  API_ENV,
  NO_AUTHORITY,
  api: {
    //common
    common_login: `${API_ENV}/login`,
    common_chpwd: `${API_ENV}/chpwd`,
    common_upload_image: `${API_ENV}/image/upload`,
    common_logout: `${API_ENV}/logout`,
    common_get_user: `${API_ENV}/getuser`,

  },
  http_status: {
    OK: 2000,
    BadRequest: 40000,
    Unauthorized: 401,
    NotFound: 404,
  }
}
