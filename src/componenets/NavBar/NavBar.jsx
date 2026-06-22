import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
export default function NavBar() {
  return (
    <Navbar expand="lg" className="site-header">
      <Container className="site-container px-0">
        <Navbar.Brand as={Link} to="/" className="brand-mark">CourseHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 nav-links"
            navbarScroll
          >
            <NavLink className="nav-link" to={"/"}>Home</NavLink>
            <NavLink className="nav-link" to={"/courses"}>Courses</NavLink>
            <NavLink className="nav-link" to={"/about"}>About</NavLink>
            <NavLink className="nav-link" to={"/contact"}>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
