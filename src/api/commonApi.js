import * as API from './axios';
export default {
  getApi: (url,params) => {
    return API.GET(url, params)
  },
  postApi: (url,params) => {
    return API.POST(url, params)
  },
  deleteApi: (url,params) => {
    return API.DELETE(url, params)
  },
  putApi: (url,params) => {
    return API.PUT(url, params)
  },
  patchApi: (url,params) => {
    return API.PATCH(url, params)
  },
}
