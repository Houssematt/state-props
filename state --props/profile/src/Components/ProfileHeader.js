import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  
import PropTypes from "prop-types";
const ProfileHeader = ({user}) => {
  //  const [fullname,email,image,role]=[...user]
  console.log(user.image)
    
  
  return (
    
    <Container style={{padding:40}}>
      <Row>
        
        <Col  xs={6}><img src={user.image} alt="profile photo" height={120} width={120} style={{float: 'left',
  marginLeft: '40px',
  margintop: '20px',
  
  borderRadius:'100%',
  overflow: 'hidden',
  borderColor:'green'}} /></Col>
        <Col ><h3>{user.fullname}</h3>
            <div style={{display:'flex'}}>
            <h6 style={{color:'blue'}}>{user.email}</h6><p> - {user.role}</p>
            </div>
        </Col>

      </Row>
      
    </Container>
  )
}
ProfileHeader.defaultProps={
  fullname:'User',
  username:'usename',
  email:'user@user.com',
  role:'userRole',
  password:'pwd',
  image:'./'

}
ProfileHeader.propTypes={
  fullname:PropTypes.string,
  username:PropTypes.string,
  handleClick:PropTypes.func
}
export default ProfileHeader