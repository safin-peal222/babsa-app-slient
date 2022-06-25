import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import "./SingleUser.css"

const SingleUser = () => {
    const {id} = useParams();
    const [singleUser,setSingleUser]=useState({});
//     fetch(`http://localhost:5000/users/all-users/confirmed-users/${id}`,
//     {
//         method:"GET"
//     }).then((res)=>{
//         console.log(res);
//     }).then((data)=>{
// console.log(data);
//     })

const getSingle = async ()=>{
    const response = await fetch(`http://localhost:5000/users/all-users/confirmed-users/${id}`);
    const data = await response.json();
 setSingleUser(data);
}
useEffect(()=>{
    getSingle();

});
    return (
        <div className="container">
            <div className="row">
               <div className="col-lg-6 left-side">
                   <div className="img">
                       <img src={singleUser.imgUrl} className="img-fluid photo" alt="" />
                   </div>
                   <div>
                       
                   <p className="name">Name : {singleUser.name}</p>
                   <p className="name">  Works In: {singleUser.jobPlace}</p>
                   <p className="name"> University : {singleUser.university}</p>
                   <p className="name">College: {singleUser.college}</p>
                   </div>
                   <div>
                       
                   </div>

               </div>
               <div className="col-lg-6">
                    <h1>Description About : {singleUser.name}</h1>
                    <hr></hr>
                    <p>Email : {singleUser.email}</p>
               </div>
            </div>
            {/* <h1>{singleUser.college}</h1>
            <p>{singleUser.university}</p>
            <p>{singleUser.phoneNumber}</p>
            <p>{singleUser.jobPlace}</p>
            <p>{singleUser.email}</p>
             <div className="single-user text-center">
                    <div className="image ">
                        <img src={singleUser.imgUrl} className="img-fluid" alt="" />
                    </div>

                </div>
            
            */}
        </div>
    );
};

export default SingleUser;