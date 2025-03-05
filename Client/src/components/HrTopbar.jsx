import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const HrTopbar=()=>{
    const name=localStorage.getItem('name');
    return(
        <>
        <div id='hrTop'>
           <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Job Portal</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {name}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
        </>
    )
}

export default HrTopbar;