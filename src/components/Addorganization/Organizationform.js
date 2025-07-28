import React from 'react'
import Back9 from '../common/back/Back9'
// import Loginaddsignup from './Loginaddsignup'
import Login from '../loginpage/Login'
import Addform from './Addform'

const Organizationform = () => {
  return (
    <div>
        <Back9 title='Add-Conference'/>
        <Addform/>
        {/* <Login/> */}
    </div>
  )
}

export default Organizationform