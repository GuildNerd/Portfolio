import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto flex justify-center gap-3 py-1 rounded-lg text-green-mint">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#technologies">Tecnologias</Nav.Link>
                            <Nav.Link href="#projects">Projetos</Nav.Link>
                            <Nav.Link href="#curriculum">Currículo</Nav.Link>
                            <Nav.Link href="#contact">Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}