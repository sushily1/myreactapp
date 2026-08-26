import React,{Fragment} from "react"
//import myimg from "../images/20.jpg";

function Service(){
  const abc="https://th.bing.com/th/id/OIGP.lfk7sgYjJpbYSXzb2cQI?r=0&pid=ImgGn";

const status="pending";

  return(
    <Fragment>
     <img src='https://th.bing.com/th/id/OIGP.lfk7sgYjJpbYSXzb2cQI?r=0&pid=ImgGn' alt='sdfg' width="200"/>
     {/* <img src={abc} alt='sdfgh'/>
     <img src={myimg} alt='fghj'/> */}
     <h1 style={{'background-color':"red",'color':'green'}}>This is inline css</h1>
     <h1 style={{backgroundcolor:'red',color:'green',padding:10}}>this is inline css link</h1>
      <h3 className='first'>this is external css</h3>
      <div className="first">
        <h2 style={{backgroundColor:`${status==="stop"?'red':'green'}`}}>this is my status {status}</h2>
      </div>
    </Fragment>
  )
} 

export default Service