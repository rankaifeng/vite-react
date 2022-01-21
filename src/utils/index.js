//时间戳转换
export const formateDate = time => {
    if (!time) return '';
    let date = new Date(time);
    return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
//左侧栏默认展开项
export const filterRoutes = pathname => {
    let pathSnippets = pathname.split('/').filter(path => path)
    let paths = pathSnippets.map((path, index) => `/${pathSnippets.slice(0, index + 1).join('/')}`)
    paths.splice(0, 1)
    return paths
}