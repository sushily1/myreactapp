import React from 'react'

function Userregistor() {
  return (
    <div>
      <div class="form-floating mb-3">
  <input type="number" class="form-control"  placeholder="phone number"/>
  <label for="phone">Phone number</label>
</div>
<div class="form-floating">
  <input type="username" class="form-control"  placeholder="username"/>
  <label for="user">Username</label>
</div>
   <div class="form-floating mb-3">
  <input type="select" class="form-control"  placeholder="date of birth"/>
  <label for="dob">Date of birth</label>
</div>
<div class="form-floating">
  <input type="Email" class="form-control"  placeholder="email"/>
  <label for="email">Email</label>
</div>
   <div class="form-floating mb-3">
  <input type="Password" class="form-control"  placeholder="Password"/>
  <label for="floatingInput">Password</label>
</div>
<div class="form-floating">
  <input type="password" class="form-control"  placeholder="Password"/>
  <label for="floatingPassword">Confirm-Password</label>
</div>
<button className='btn btn-success w-100 m-t 5px' >submit</button>
    </div>
    
  )
}
export default  Userregistor;