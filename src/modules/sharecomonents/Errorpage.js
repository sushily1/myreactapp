import React from 'react';
import { Link } from 'react-router-dom';

function Errorpage() {
  return (
    <div className="container top-fixed">
      <div className="row">
        <div className="col-12 text-center">

          <Link to="/applist">
      <img className='gsk' alt="The 404 error message - Web Page Design by Nicepage" id="dimg_ReWiavSHBsPWseMPvJ3e4As_43" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0ywXxmNYeFUpUyxYAskTngXsc7MwRExR54TBqrqHr2Q&amp;s=10" data-csiid="ReWiavSHBsPWseMPvJ3e4As_24" data-atf="4"/>
          </Link>
          <br />
          <Link to="/applist" className="btn btn-danger btn-sm w-100">
            Back to app
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Errorpage;
