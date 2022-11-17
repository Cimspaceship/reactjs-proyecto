import Container from 'react-bootstrap/Container';
      import Nav from 'react-bootstrap/Nav';
      import Navbar from 'react-bootstrap/Navbar';
      import { FaEmpire } from 'react-icons/fa';
      import { BsFillCartFill } from "react-icons/bs";

function NavBar() {
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <FaEmpire size="100px" color='green' className="me-4"/>
        <Navbar.Brand href="#home">
          Galactic Empire Hardstore
        </Navbar.Brand>
        <Nav className="me-auto">
               <Nav.Link href="#home">Inicio</Nav.Link>
               <Nav.Link href="#products">Productos</Nav.Link>
               <Nav.Link href="#pcbuild">Arma Tu PC</Nav.Link>
               <Nav.Link href="#contact">Contacto</Nav.Link>
               <Nav.Link href="#login">Login</Nav.Link>
             </Nav>
             <BsFillCartFill size="35px" color='green' className="me-4"/>
      </Container>
    </Navbar>
        );
      }
      



export default NavBar



