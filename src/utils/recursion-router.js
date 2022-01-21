//重定向到children的第一个路由
export function recursionRouterTwo(userRouter = [], allRouter = []) {
    const realRoutes = allRouter
        .filter(item => userRouter.includes(item.path))
        .map(item =>{
            return {
                ...item,
                redirect:item.routes?item.routes[0].path:null,
                routes: item.routes
                    ? recursionRouterTwo(userRouter, item.routes)
                    : null
            }
        })
    return realRoutes
}