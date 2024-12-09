import { useRequest } from 'vue-request'

// 请求枚举
enum url {
  helpCenterList = '/article/help/center/list', // 帮助中心-列表
  helpCenterDetail = '/article/help/center/detail/', // 帮助中心-文章详情
  developList = '/article/develop/document/list', // 开发文档-列表
  developDetail = '/article/develop/document/detail/' // 开发文档-文章详情
}

// 获取帮助中心-列表
export const fetchHelpCenterList = () => {
  const { data, loading, error, runAsync }
      = useRequest(
        () => http.get(url.helpCenterList)
      )
  return { data, loading, error, runAsync }
}

// 获取帮助中心-文章详情
export const fetchHelpCenterDetail = () => {
  const { data, loading, error, runAsync }
      = useRequest(
        (data: any) => http.get(url.helpCenterDetail + data),
        { manual: true }
      )
  return { data, loading, error, runAsync }
}

// 获取开发文档-列表
export const fetchDevelopList = () => {
  const { data, loading, error, runAsync }
      = useRequest(
        () => http.get(url.developList)
      )
  return { data, loading, error, runAsync }
}

// 获取开发文档-文章详情
export const fetchDevelopDetail = () => {
  const { data, loading, error, runAsync }
      = useRequest(
        (data: any) => http.get(url.developDetail + data),
        { manual: true }
      )
  return { data, loading, error, runAsync }
}
