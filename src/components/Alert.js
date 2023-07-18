import React from 'react'


export default function Alert(props) {

    return(
      <div className="boxalert">
      {    props.resp&&   <div className={`alert alert-${props.resp.type} alert-dismissible fade show text-center`} role="alert">
          <strong>{props.resp.type}!</strong> {props.resp.msge}</div>}
      
       
        
      </div>
    )
}