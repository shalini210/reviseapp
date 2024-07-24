import React from 'react'

export default function Footer(props) {
    console.log(props)
    // let companyname = "Xyz TEchnologies"
    // let a=10;
    // let b = 20;
  return (
    <div className="footer"> Design and Developed by  :
{props.cname} <br></br> all rights reserved :
 {props.copyright}
    {/* {companyname} a+b = {a+b} */}
    </div>
  )
}
