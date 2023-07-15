import React from 'react'

export default function Recent(props) {
  return (
    <div className="recent-section bg-light p-4 mt-5 mx-3 ">
        <h3>Recent</h3>
        <ul className="list-unstyled">
            <li onClick={()=>props.research()}>{props.recent.map((recentData)=>{
                recentData.city
            })} </li>
        </ul>
    </div>
  )
}
