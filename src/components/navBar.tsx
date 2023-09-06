import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <div>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto flex justify-center gap-3 py-1 rounded-lg text-green-mint">
                            <Nav.Link href="#home" className='hover:text-green-neon'>Início</Nav.Link>
                            <Nav.Link href="#technologies" className='hover:text-green-neon'>Tecnologias</Nav.Link>
                            <Nav.Link href="#projects" className='hover:text-green-neon'>Projetos</Nav.Link>
                            <Nav.Link href="#curriculum" className='hover:text-green-neon'>Currículo</Nav.Link>
                            <Nav.Link href="#contact" className='hover:text-green-neon'>Contato</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}