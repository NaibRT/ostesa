import React from 'react';

type Props = {
 data:string[]
}


function Breadcrumb({ data } : Props) {
  return (
    <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
            {
                data.map((x,i) => {
                     if(x === data[data.length-1]){
                        return <span className="breadcrumb-item active">{x}</span>
                     }
                     return  <a className="breadcrumb-item text-dark" href="#">{x}</a>
                })
            }
          {/* <a className="breadcrumb-item text-dark" href="#">Home</a>
          <span className="breadcrumb-item active">Contact</span> */}
        </nav>
      </div>
    </div>
  </div>
  )
}

export default Breadcrumb