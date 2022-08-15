import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';  

const ProfileBody = ({user}) => {

  return (
    <Container>
      <Row>
        <Col><h1>Profile Details</h1></Col>

      </Row>
      <Row>
        <Col>Username</Col>
        <Col>{user.username}</Col>
      </Row>
      <Row>
        <Col>E-mail</Col>
        <Col>{user.email}</Col>
      </Row>
      <Row>
        <Col>Password</Col>
        <Col>{user.password}</Col>
      </Row>
      <Row>
        <Col>Full Name</Col>
        <Col>{user.fullname}</Col>
      </Row>
      <Row>
        <Col>Title</Col>
        <Col>{user.role}</Col>
      </Row>
      <Row>
        <Col>Language</Col>
        <Col>English</Col>
      </Row>
      </Container>

  );
}

export default ProfileBody