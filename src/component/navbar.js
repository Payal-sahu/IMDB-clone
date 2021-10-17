import React,{useState} from "react";
import {Navbar,Form,Nav,NavDropdown,FormControl,Button} from "react-bootstrap";
import "./navbar.css";


let Navbar1=({wholeData,setFilterD})=>{
   const [search,setSearch]=useState("");
    let handleSearch=(e)=>{
     setSearch(e.target.value);
     console.log(e.target.value);
     let arr=wholeData;
     arr=arr.filter(item=>item.title.toUpperCase().startsWith(e.target.value.toUpperCase()));
     setFilterD([...arr]);
    }

    return <Navbar expand="lg"className="navbar1">
    <Navbar.Brand href="#"style={{color:"white",marginLeft:"30px",marginBottom:"30px",fontWeight:"bold" , fontSize:"30px"}}>Discover</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: '100px',color:"white" }}
        navbarScroll
      >
        <Nav.Link href="#action1" style={{color:"#0ea2e0",marginLeft:"300px",marginBottom:"30px",fontWeight:"bold" , fontSize:"12px"}}>POPULAR</Nav.Link>
        <Nav.Link href="#action2"style={{color:"#0ea2e0",marginLeft:"0px",fontWeight:"bold" , fontSize:"12px"}}>NEWEST</Nav.Link>
        <Nav.Link href="#action1" style={{color:"#0ea2e0",marginLeft:"0px",fontWeight:"bold" , fontSize:"12px"}}>TRENDING</Nav.Link>
        <Nav.Link href="#action2"style={{color:"#0ea2e0",marginLeft:"0px",fontWeight:"bold",fontSize:"12px" }}>TOP RATED</Nav.Link>
      </Nav>
      <Form className="d-flex"style={{marginLeft:"150px" , marginBottom:"30px" ,backgroundColor:"#1e293b" ,color:"#1e293b"}}>
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          onChange={(e)=>handleSearch(e)}
        />
      </Form>
    </Navbar.Collapse>
  </Navbar>

    
}
export default Navbar1