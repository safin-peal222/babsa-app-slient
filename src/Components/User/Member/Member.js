import React from 'react';
import { Link } from 'react-router-dom';
import "./Member.css";

const Member = (props) => {
    // console.log(props)
    return (
        <div class="card m-2 p-2 picture">
        {/* <img src="..." class="card-img-top" alt="..."> */}
        <div class="card-body text-center">
        <img src={props.member.imgUrl} alt="img" className="img-fluid w-70 h-50 rounded" />
          <h5 class="card-title name">{props.member.name}</h5>
          <p class="card-text uni">{props.member.university}</p>
          <p className="card-text ">{props.member.jobPlace}</p>

         
          <div>
          <Link to={`/single-user/${props.member._id}`}><button className="btn btn-primary mt-2">View Details</button></Link>
          </div>
        </div>
      </div>
      
    );
};

export default Member;