import React from "react";
import {Card} from "react-bootstrap";

let EachCard=({data})=>{
return (<Card style={{ width: '25rem',padding:"50px 40px",backgroundColor:"#1e293b"}}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${data.poster}`}/>
  <Card.Body style={{color:"#0ea2e0",textAlign:"centre" }}>
    <Card.Title style={{color:"#0ea2e0" , textAlign:"center" , fontSize:"15px",fontWeight:"bold"}}>{data.title}</Card.Title>
    <Card.Text style ={{textAlign:"center" , color:"#929aa1" , fontWeight:"bold"}}>
      {data.rating}/10 | {data.year[0]}
    </Card.Text>
  </Card.Body>
</Card>)
}
export default EachCard;