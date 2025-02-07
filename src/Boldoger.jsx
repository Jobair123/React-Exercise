import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
const Heading = styled.h2`
color:red;
border: 2px solid green;
border-radius: 5px;
margin:20px;
padding:20px
` 
const Sbtn = styled.button({
color:"green",
width:"130px",
height:"40px",
margin:"20px"
}
)
function Boldoger(){
    return (
        <div>
            <Heading>বুল ডুজার</Heading>
    <Sbtn>submit</Sbtn>
    <Button>submit</Button>
     {/* test */}
    <ButtonGroup aria-label="Basic example">
      <Button variant="success">Left</Button>
      <Button variant="danger">Middle</Button>
      <Button variant="primary">Right</Button>
    </ButtonGroup>
    <br />     <br />
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="second group">
        <Button>A</Button>
        <Button>B</Button>
        <Button>C</Button>
        <Button>D</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="second group">
        <Button>i</Button>
        <Button>ii</Button>
        <Button>iii</Button>
        <Button>iv</Button>
      </ButtonGroup>
      </ButtonToolbar>
        </div>
    )
}