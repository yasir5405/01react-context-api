import { useContext } from 'react'
import React from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please Login</div>
  return (
    <div className='mt-10'>
        <h1>Welcome {user.username}</h1>
    </div>
  )
}

export default Profile