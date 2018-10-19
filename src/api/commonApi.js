import * as API from './axios';
export default {
  getApi: params => {
    return API.GET('/get', params)
  },
  postApi: params => {
    return API.POST('/post', params)
  },
  deleteApi: params => {
    return API.DELETE('/delete.do', params)
  },
  putApi: params => {
    return API.PUT('/put.do', params)
  },
  patchApi: params => {
    return API.PATCH('/patch.do', params)
  },
}
