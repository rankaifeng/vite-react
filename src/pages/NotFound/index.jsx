import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import './index.less'
const NotFound = () => {
    const [status, setStatus] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setStatus(false)
        }, 1000)
    }, [])
    if (status) {
        return (
            <div className="loading">
                <Spin tip="Loading..." />
            </div>
        )
    }
    return (
        <div className="loading">
            NotFound 404
        </div>
    )
}
export default NotFound