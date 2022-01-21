const sessStor = {
    /**
     * 存储值
     */
    setVal=(key, val) => {
        let newVal = typeof val === 'object' ? JSON.stringify(val) : val
        sessionStorage.setItem(key, newVal)
    },
    /**
     * 获取缓存值
     */
    getVal = key => {
        const newVal = sessionStorage.getItem(key)
        return typeof newVal === 'object' ? JSON.parse(newVal) : newVal
    },
    /**
     * 移除某一个值
     */
    removeVal = key => {
        sessionStorage.removeItem(key)
    },
    /**
     * 清空缓存里面所有值
     */
    clearVal = () => {
        sessionStorage.clear()
    }
}
export default sessStor;