import React from 'react'
import bannerimg from  '../images/bannerbg.avif'
import Teammeber from './Teammeber';
import bg from '../images/bg.jpg'
import members from './membersdata'
export default function TeamMembers() {
 
    let membersdata = members.map((m)=>
    {
        return <Teammeber tname={m.name} timg={m.img} design={m.desig}></Teammeber>
    })
  return (
    <div className='maincontainer'>
{membersdata}
    </div>
  )
}
