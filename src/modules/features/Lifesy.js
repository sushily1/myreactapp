import React, { useState } from 'react'
import { Fragment } from 'react';

function Lifesy() {

    const [sv,sf]=useState("user");
    const [pv,pf]=useState("12346");

    const myele =(r)=>{
        sf(r.target.value);
    }

    const pupdate =(e)=>{
    pf(e.target.value); 
    }
 
    const submitform =()=>{
        if(sv==="" || pv==="")
        {
            alert("user and password empty");
        }
        else
        {
            if(sv==="admin@gmail.com" && pv==="admin")
            {
                alert("welcome");
        
            }
            else
            {
                alert("user and password wrong");
                window.location.href="http//googal.com";
            }
        }
    }

  return (
    <Fragment>
      <input type='text' value={sv} onInput={myele}/>
      <input type='password' value={pv} onInput={pupdate}/>
      <input type='button' value="submit" onClick={submitform}/>
    </Fragment>
  )
}
export default Lifesy;