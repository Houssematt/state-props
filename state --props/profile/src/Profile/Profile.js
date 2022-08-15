import React from 'react'
import ProfileBody from '../Components/ProfileBody'
import ProfileHeader from '../Components/ProfileHeader'

const Profile = (props) => {
    console.log(props)
  return (
    <div>  
        <ProfileHeader user={props} ></ProfileHeader>
        
        <ProfileBody user={props}></ProfileBody>
    </div>
    
  )
}


export default Profile