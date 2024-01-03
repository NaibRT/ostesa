// pages/index.js
import React from 'react';
import { useEffect } from 'react';

function Alert({
    result,
    setResult
}) {


  function closeHandler() {
    setResult({
      status:null,
      text:null
    })
  }


  if(result.status){
    return (
      <div   className={`alert    ${result?.status}`} role="alert">
      {result?.text}
      <button onClick={closeHandler} type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
     </div>
    );
  }

  return(<></>)

}

export default Alert;



