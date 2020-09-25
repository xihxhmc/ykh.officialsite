import Fly from 'flyio/dist/npm/fly'
const fly = new Fly();
const isDev = true;
const Api = isDev? 'https://dev.ykhcn.net': 'https://dev.ykhcn.net';

class AdService {

    // 获取职位类别
    // GetJobCategoryList(callback, error){
    //     let url = '/api/recruit/JobCategory/GetJobCategoryList'
    //     return HttpService.get(url, callback, error)
    // }
    GetJobCategoryList(callback, errback) {
        fly
          .get( Api + '/api/recruit/JobCategory/GetJobCategoryList?_data=' + new Date().getTime() )
          .then(res => {
            typeof callback === 'function' && callback(res.data)
          })
          .catch(err => {
            typeof errback === 'function' && errback(err)
          })
    }
    // 获取工作地点
    GetWorkPlaceListPage(callback, errback) {
        fly
          .get( Api + '/api/recruit/WorkPlace/GetWorkPlaceListPage?_data=' + new Date().getTime() )
          .then(res => {
            typeof callback === 'function' && callback(res.data)
          })
          .catch(err => {
            typeof errback === 'function' && errback(err)
          })
    }
    // 获取招聘详情
    GetRecruitDeailListPage(req, callback, errback) {
        fly
          .get( Api + `/api/recruit/RecruitDeail/GetRecruitDeailListPage?_data=${new Date().getTime()}`, req )
          .then(res => {
            typeof callback === 'function' && callback(res.data)
          })
          .catch(err => {
            typeof errback === 'function' && errback(err)
          })
    }

}
export default new AdService()