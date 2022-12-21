import Container from 'react-bootstrap/Container';
      import Nav from 'react-bootstrap/Nav';
      import Navbar from 'react-bootstrap/Navbar';
      import { FaEmpire } from 'react-icons/fa';
      import { BsFillCartFill } from "react-icons/bs";
      import {Link} from "react-router-dom"
      import "./NavBar.css"
      import { useNavigate } from "react-router-dom";
      

function NavBar() {
  const navigate = useNavigate()
    return (
      <Navbar bg="dark" variant="dark">
      <Container>
      <FaEmpire size="100px" color='green' className="me-4"/>
        <Navbar.Brand href="#home">
          Galactic Empire Hardstore
        </Navbar.Brand>
        <Nav className="me-auto">
               <Link to="/" className='navlink'>Inicio</Link>
               <Link to="/category/PSU" className='navlink'>Fuentes</Link>
               <Link to="/category/Cpu-Cooler" className='navlink'>Coolers para CPU</Link>
               <Link to="/category/Headset" className='navlink'>Auriculares</Link>
             </Nav>
             <Link to="/cart">
               <BsFillCartFill size="35px" color='green' className="me-4"/>
             </Link>
      </Container>
    </Navbar>
        );
      }
      



export default NavBar



