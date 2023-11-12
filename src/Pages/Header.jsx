import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div><Navbar expand="lg" className="bg-body-dark">
      
    <Container>
      <Navbar.Brand href="#home"><img className='logo'  src="https://freepngimg.com/thumb/google/66809-google-docs-drive-plus-android-document.png" alt=""  /></Navbar.Brand> 
   
    </Container>
  </Navbar></div>
  )
}

export default Header