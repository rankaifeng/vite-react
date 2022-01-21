import React from 'react'
import { Redirect } from 'react-router-dom'
import useStore from '../../store'

const Home = () => {

    const setTest = useStore(state => state.setTest)

    return (
        <div style={{ width: '100vh', height: '100vh' }} onClick={()=>{
            setTest();
        }}>ho22me</div>
    )
}
export default Home