// 用户操作接口
import axios from '@/axios';

export default {
  login(params = {}) {
    // params.appkey = 'caoran_1622859443194';
    return axios.post('/passport/login', params);
  },
};
